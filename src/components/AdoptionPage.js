import React from 'react';
import Header from './Header';
import NextCat from './NextCat';
import NextDog from './NextDog';
import PersonQueue from './PersonQueue';
import ConfirmationPage from './ConfirmationPage';
import config from '../config';
import PetfulContext from '../Context/Context';
import AllPets from './AllPets';

class AdoptionPage extends React.Component {
    static contextType = PetfulContext;

    state = {
        name: '',
        peopleList: [],
        signedUp: false,
        nextUp: false,
        realPerson: false,
        adopted: false,
    }


    // on Componenet mount make all API get requests and store tehm in state
    componentDidMount() {
        // fetch dogs and store them in state
        fetch(`${config.API_BASE_URL}/pets/api/getalldogs`)
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(dogs => {
                this.context.setDogs(dogs);
            });

        // fetch cats and store them in state
        fetch(`${config.API_BASE_URL}/pets/api/getallcats`)
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(cats => {
                this.context.setCats(cats);
            });
        // fetch people and store them in state
        fetch(`${config.API_BASE_URL}/people`)
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(people => {
                this.context.setPeople(people);
                this.setState({
                    peopleList: people
                })
            });
    }


    adoptCatNow = () => {
        console.log('AdoptCatNow func executed');
        // if real person set adoptedCat to nextCat set state to true and dont bother removing cat from queue
        // set adopted in state to true will trigger rerender and dirsect to confirmation component
        // ONLY done if current user adopting (WONT SET STATE DURING TIMER )
        if (this.state.realPerson) {
            this.context.setAdoptedPet(this.context.cats[0]);
            this.setState({
                adopted: true,
            });
        }
        // else if part of auto rotation remove cat 
        else {
            fetch(`${config.API_BASE_URL}/pets/api/removecat`, {
                method: 'delete',
                headers: {
                    'content-type': 'application/json',
                },
            })
                .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
                .then(cats => {
                    this.context.setCats(cats);
                    this.context.setAdoptedPet(this.context.cats[0]);
                });
        }
        // dequeue top person from list
        // needs to be done regardless of human or counter
        fetch(`${config.API_BASE_URL}/people`, {
            method: 'delete',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(people => {
                this.context.setPeople(people);
                this.setState({
                    peopleList: people
                });
            });
    };

    adoptDogNow = () => {
        // if not real person remove pet from linked list (if is real person we dont want to remove until conformation)
        this.context.setAdoptedPet(this.context.dogs[0]);
        if (!this.state.realPerson) {
            fetch(`${config.API_BASE_URL}/pets/api/removedog`, {
                method: 'delete',
                headers: {
                    'content-type': 'application/json',
                },
            })
                .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
                .then(dogs => {
                    this.context.setDogs(dogs);
                });
        }

        // dequeue top person from list
        fetch(`${config.API_BASE_URL}/people`, {
            method: 'delete',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(people => {
                this.context.setPeople(people);
                // if real person set adopted to true which will redirect to conformation page and update peopleList
                // if not just update peoplelist in state
                if (this.state.realPerson) {
                    this.setState({
                        peopleList: people,
                        adopted: true
                    });
                } else {
                    this.setState({
                        peopleList: people
                    })
                }
            });
    };

    // sets nextUp to true so pet components render
    // also need to set realPerson because we use adoptCat/adoptDog funcs in iterater
    setNextUp = () => {
        this.setState({
            nextUp: true,
            realPerson: true
        });
    };

    // In my Conditional Rendering I want IF the current user is the next in line to render nextCat
    // and NextDog components

    render() {
        // console.log('adoption component render');
        if (this.state.nextUp) {
            if (!this.state.adopted) {
                return (
                    <div className='adoption-page'>
                        <Header />
                        <PersonQueue
                            startTimer={this.startTimer}
                            adoptCatNow={this.adoptCatNow}
                            adoptDogNow={this.adoptDogNow}
                            peopleList={this.state.peopleList}
                            setNextUp={this.setNextUp}
                            testFunc={this.testFunc}
                        />
                        <div className='pets-and-queue'>
                            <NextCat adoptCatNow={this.adoptCatNow} />
                            <NextDog adoptDogNow={this.adoptDogNow} />
                        </div>
                    </div>
                );
            }
            else if (this.state.adopted) {
                return (
                    <div className='confirmation-page'>
                        <ConfirmationPage />
                    </div>
                );
            };

        } else if (this.context.currentUser) {
            return (
                <div className='adoption-page'>
                    <Header />
                    <h3>You are in line {this.context.currentUser} !! Please wait....</h3>
                    <PersonQueue
                        startTimer={this.startTimer}
                        adoptCatNow={this.adoptCatNow}
                        adoptDogNow={this.adoptDogNow}
                        peopleList={this.state.peopleList}
                        setNextUp={this.setNextUp}
                        testFunc={this.testFunc} />
                    <AllPets />
                </div>
            )
        } else {
            return (
                <div className='adoption-page'>
                    <Header />
                    <h3>Enter your name to get in line now!</h3>
                    <PersonQueue
                        startTimer={this.startTimer}
                        adoptCatNow={this.adoptCatNow}
                        adoptDogNow={this.adoptDogNow}
                        peopleList={this.state.peopleList}
                        setNextUp={this.setNextUp}
                        testFunc={this.testFunc} />
                    <AllPets />
                </div>
            );
        };
    };
};

export default AdoptionPage;




import React from 'react';
import Header from './Header';
import NextCat from './NextCat';
import NextDog from './NextDog';
import PersonQueue from './PersonQueue';
import ConfirmationPage from './ConfirmationPage';
import config from '../config';
import PetfulContext from '../Context/Context';


export default class AdoptionPage extends React.Component {
    static contextType = PetfulContext;

    state = {
        name: '',
        peopleList: [],
        signedUp: false,
        nextUp: false,
        realPerson: false,
        adopted: false,
        petType: null
    };

    componentDidMount() {
        fetch(`${config.API_BASE_URL}/pets/api/getalldogs`)
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(dogs => {
                this.context.setDogs(dogs);
            });
        fetch(`${config.API_BASE_URL}/pets/api/getallcats`)
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(cats => {
                this.context.setCats(cats);
            });
        fetch(`${config.API_BASE_URL}/people`)
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(people => {
                this.context.setPeople(people);
                this.setState({
                    peopleList: people
                });
            });
    };


    adoptCatNow = () => {
        // if real person set adoptedCat to nextCat set state to true and dont bother removing cat from queue
        // set adopted in state to true will trigger rerender and dirsect to confirmation component
        // ONLY done if current user adopting (WONT SET STATE DURING TIMER )
        if (this.state.realPerson) {
            this.context.setAdoptedPet(this.context.cats[0]);
            this.setState({
                adopted: true,
                petType: 'cat'
            });
        }
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
        };
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
        // if real person set adoptedDog to nextDogset state to true and dont bother removing dog from queue
        // set adopted in state to true will trigger rerender and dirsect to confirmation component
        // ONLY done if current user adopting (WONT SET STATE DURING TIMER )
        if (this.state.realPerson) {
            this.context.setAdoptedPet(this.context.dogs[0]);
            this.setState({
                adopted: true,
                petType: 'dog'
            });
        }
        else {
            fetch(`${config.API_BASE_URL}/pets/api/removedog`, {
                method: 'delete',
                headers: {
                    'content-type': 'application/json',
                },
            })
                .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
                .then(dogs => {
                    this.context.setDogs(dogs);
                    this.context.setAdoptedPet(this.context.dogs[0]);
                });
        };
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

    setNextUp = () => {
        this.setState({
            nextUp: true,
            realPerson: true
        });
    };


    render() {
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
                            <NextCat
                                adoptCatNow={this.adoptCatNow}
                                realPerson={this.state.realPerson} />
                            <NextDog
                                adoptDogNow={this.adoptDogNow}
                                realPerson={this.state.realPerson} />
                        </div>
                    </div>
                );
            }
            else if (this.state.adopted) {
                return (
                    <div className='confirmation-page'>
                        <ConfirmationPage
                            petType={this.state.petType} />
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
                    <div className='pets-and-queue'>
                        <NextCat
                            adoptCatNow={this.adoptCatNow}
                            realPerson={this.state.realPerson} />
                        <NextDog
                            adoptDogNow={this.adoptDogNow}
                            realPerson={this.state.realPerson} />
                    </div>
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
                </div>
            );
        };
    };
};






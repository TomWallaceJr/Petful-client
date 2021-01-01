import React from 'react';
import Header from './Header';
import NextCat from './NextCat';
import NextDog from './NextDog';
import PersonQueue from './PersonQueue';
import ConfirmationPage from './ConfirmationPage';
import config from '../config';
import PetfulContext from '../Context/Context';

class AdoptionPage extends React.Component {
    static contextType = PetfulContext;

    state = {
        name: '',
        peopleList: [],
        signedUp: false,
        nextUp: false,
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

        // fetch next cat in line
        fetch(`${config.API_BASE_URL}/pets/api/nextcat`)
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(nextCat => {
                this.context.setNextCat(nextCat)
            })

        // fetch next dog in line
        fetch(`${config.API_BASE_URL}/pets/api/nextdog`)
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(nextDog => {
                this.context.setNextDog(nextDog)
            })
    }



    adoptCatNow = () => {
        this.context.setAdoptedPet(this.context.nextCat);
        fetch(`${config.API_BASE_URL}/pets/api/removecat`, {
            method: 'delete',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(cats => {
                this.context.setCats(cats);
            });

        // dequeue top person from list
        // THIS DEL REQUEST NOT WORKING BUT API ENDPOINT FUCNTIONS FINE ON POSTMAN
        fetch(`${config.API_BASE_URL}/people`, {
            method: 'delete',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(people => {
                this.context.setPeople(people);
            });

        // set adopted in state to true will trigger rerender and dirsect to confirmation component
        // ONLY done if current user adopting (WONT SET STATE DURING TIMER )
        if (this.context.currentUser === this.state.peopleList[0]) {
            this.setState({
                adopted: true,
            });
        };
    };

    adoptDogNow = () => {
        this.context.setAdoptedPet(this.context.nextDog);
        fetch(`${config.API_BASE_URL}/pets/api/removedog`, {
            method: 'delete'
        }).then(res => res.json())
            .then(dogs => this.context.setDogs(dogs));

        // set adopted in state to true will trigger rerender and dirsect to confirmation component
        // ONLY done if current user adopting (WONT SET STATE DURING TIMER )
        if (this.state.name === this.state.peopleList[0]) {
            this.setState({
                adopted: true,
            });
        };
    };

    autoAdopt = () => {
        if (this.context.currentUser !== this.state.peopleList[0]) {
            console.log('currentUser -', this.context.currentUser, 'nextUser -', this.state.peopleList[0])
            this.adoptCatNow();
        }
    }

    setNextUp = () => {
        this.setState({
            nextUp: true
        })
    }


    testFunc = () => {
        fetch(`http://localhost:8000/people`, {
            method: 'delete',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(people => {
                this.context.setPeople(people);
            });
    }


    // In my Conditional Rendering I want IF the current user is the next in line to render nextCat
    // and NextDog components

    render() {
        console.log('adoption page render');
        if (this.state.nextUp) {
            if (!this.state.adopted) {
                return (
                    <div className='adoption-page'>
                        <Header />
                        <hr />
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
                )
            }
            else if (this.state.adopted) {
                return (
                    <div className='confirmation-page'>
                        <ConfirmationPage />
                    </div>
                )
            }

        } else if (this.context.currentUser) {
            return (
                <div className='adoption-page'>
                    <Header />
                    <hr />
                    <h3>You are in line {this.context.currentUser} !! Please wait....</h3>
                    <PersonQueue
                        startTimer={this.startTimer}
                        adoptCatNow={this.adoptCatNow}
                        adoptDogNow={this.adoptDogNow}
                        peopleList={this.state.peopleList}
                        setNextUp={this.setNextUp}
                        testFunc={this.testFunc} />
                </div>
            )
        } else {
            return (
                <div className='adoption-page'>
                    <Header />
                    <hr />
                    <h3>Enter your name to get in line now!</h3>
                    <PersonQueue
                        startTimer={this.startTimer}
                        adoptCatNow={this.adoptCatNow}
                        adoptDogNow={this.adoptDogNow}
                        peopleList={this.state.peopleList}
                        setNextUp={this.setNextUp}
                        testFunc={this.testFunc} />
                </div>
            )
        }
    }
}

export default AdoptionPage;




import React from 'react';
import Header from './Header';
import NextCat from './NextCat';
import NextDog from './NextDog';
import PersonQueue from './PersonQueue';
import ConfirmationPage from './ConfirmationPage';
import config from '../config';

class AdoptionPage extends React.Component {
    state = {
        people: [],
        currentUser: '',
        cats: [],
        dogs: [],
        nextCat: {},
        nextDog: {},
        type: '',
        adopted: false,
    }

    // on Componenet mount make all API get requests and store tehm in state
    componentDidMount() {
        // fetch dogs and store them in state
        fetch(`${config.API_BASE_URL}/pets/api/getalldogs`)
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(dogs => {
                this.setState({
                    dogs
                })
            });

        // fetch cats and store them in state
        fetch(`${config.API_BASE_URL}/pets/api/getallcats`)
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(cats => {
                this.setState({
                    cats
                })
            });
        // fetch people and store them in state
        fetch(`${config.API_BASE_URL}/people`)
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(people => {
                this.setState({
                    people
                })
            });

        // fetch next cat in line
        fetch(`${config.API_BASE_URL}/pets/api/nextcat`)
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(nextCat => {
                this.setState({
                    nextCat
                })
            })

        // fetch next dog in line
        fetch(`${config.API_BASE_URL}/pets/api/nextdog`)
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(nextDog => {
                this.setState({
                    nextDog
                })
            })
    }


    addCurrentUser = (name) => {
        const people = { ...this.state.people };
        people[this.state.people.length + 1] = name;
        this.setState({
            currentUser: name,
            people
        })
    }

    adoptCatNow = () => {
        fetch(`http://localhost:8000/pets/api/removecat`, {
            method: 'delete'
        })
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())

        fetch(`http://localhost:8000/people`, {
            method: 'delete'
        })
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())

        const catList = { ...this.state.cats };
        const people = { ...this.state.people }
        Object.keys(catList).shift();
        Object.keys(people).shift();

        this.setState({
            adopted: true,
            type: 'cat',
            people
        })
    }

    adoptDogNow = () => {
        fetch(`http://localhost:8000/pets/api/removedog`, {
            method: 'delete'
        })
            .then(res => res.json())

        fetch(`http://localhost:8000/people`, {
            method: 'delete'
        })
            .then(res => res.json())

        const dogList = { ...this.state.dogs };
        const people = { ...this.state.people }
        Object.keys(dogList).shift();
        Object.keys(people).shift();

        this.setState({
            adopted: true,
            type: 'dog'
        })
    }

    startTimer = () => {
        console.log('timer started');
        const adoptionTimer = setInterval(() => {
            this.adoptCatNow();
        }, 5000);

        const stopTimer = setInterval(() => {
            if (this.state.people === this.state.currentUser) {
                console.log('stop timer started')
                clearInterval(adoptionTimer);
                clearInterval(stopTimer);
            }
        });
    };


    render() {
        let currentUser = this.state.currentUser;
        let nextInLine = this.state.people[0];
        console.log('next - ', nextInLine);

        if (nextInLine === currentUser) {
            if (!this.state.adopted) {
                return (
                    <div className='adoption-page'>
                        <Header />
                        <hr />
                        <PersonQueue
                            addCurrentUser={this.addCurrentUser}
                            people={this.state.people}
                            currentUser={this.state.currentUser}
                            startTimer={this.startTimer} />
                        <div className='pets-and-queue'>
                            <NextCat
                                nextCat={this.state.nextCat}
                                adoptCatNow={this.adoptCatNow} />
                            <NextDog
                                nextDog={this.state.nextDog}
                                adoptDogNow={this.adoptDogNow} />
                        </div>

                    </div>
                )
            }
            else {
                return (
                    <div className='confirmation-page'>
                        <ConfirmationPage
                            cats={this.state.cats}
                            dogs={this.state.dogs}
                            currentUser={this.state.currentUser}
                            type={this.state.type} />
                    </div>
                )
            }
        } else if (currentUser) {
            return (
                <div className='adoption-page'>
                    <Header />
                    <hr />
                    <h3>You are in line {this.state.currentUser} !! Please wait....</h3>
                    <PersonQueue
                        addCurrentUser={this.addCurrentUser}
                        people={this.state.people}
                        currentUser={this.state.currentUser}
                        startTimer={this.startTimer} />
                </div>
            )
        } else {
            return (
                <div className='adoption-page'>
                    <Header />
                    <hr />
                    <h3>Enter your name to get in line now!</h3>
                    <PersonQueue
                        addCurrentUser={this.addCurrentUser}
                        people={this.state.people}
                        currentUser={this.state.currentUser}
                        startTimer={this.startTimer} />
                </div>
            )
        }
    }
}

export default AdoptionPage;




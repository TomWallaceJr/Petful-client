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
        nextUp: true,
        adopted: false,
        type: ''
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
            method: 'delete'
        }).then(res => res.json())
            .then(cats => this.context.setCats(cats));

        this.setState({
            adopted: true,
            type: 'cat',
        })
    }

    adoptDogNow = () => {
        this.context.setAdoptedPet(this.context.nextDog);
        fetch(`http://localhost:8000/pets/api/removedog`, {
            method: 'delete'
        }).then(res => res.json())
            .then(dogs => this.context.setDogs(dogs));

        this.setState({
            adopted: true,
            type: 'dog'
        })
    }

    // startTimer = () => {
    //     console.log('timer started');
    //     const adoptionTimer = setInterval(() => {
    //         this.adoptCatNow();
    //     }, 5000);

    //     const stopTimer = setInterval(() => {
    //         if (this.state.people === this.state.currentUser) {
    //             console.log('stop timer started')
    //             clearInterval(adoptionTimer);
    //             clearInterval(stopTimer);
    //         }
    //     });
    // };



    // In my Conditional Rendering I want IF the current user is the next in line to render nextCat
    // and NextDog components

    render() {
        let currentUser = this.context.currentUser;
        let nextUser = this.state.peopleList[0];
        console.log('next up -', nextUser, 'currentUser -', currentUser)
        if (this.context.currentUser === this.state.peopleList[0]) {
            this.setState({
                nextUp: true
            })
        }

        if (this.state.nextUp) {
            if (!this.state.adopted) {
                return (
                    <div className='adoption-page'>
                        <Header />
                        <hr />
                        <PersonQueue />
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
                        <ConfirmationPage type={this.state.type} />
                    </div>
                )
            }

        } else if (this.state.nextUp) {
            return (
                <div className='adoption-page'>
                    <Header />
                    <hr />
                    <h3>You are in line {currentUser} !! Please wait....</h3>
                    <PersonQueue />
                </div>
            )
        } else {
            return (
                <div className='adoption-page'>
                    <Header />
                    <hr />
                    <h3>Enter your name to get in line now!</h3>
                    <PersonQueue />
                </div>
            )
        }
    }
}

export default AdoptionPage;




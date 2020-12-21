import React from 'react';
import Header from './Header';
import NextCat from './NextCat';
import NextDog from './NextDog';
import PersonQueue from './PersonQueue';
import ConfirmationPage from './ConfirmationPage';

class AdoptionPage extends React.Component {
    state = {
        people: [],
        currentUser: '',
        cats: [],
        dogs: [],
        nextCat: {},
        nextDog: {},
        adopted: false,
        error: null
    }

    // on Componenet mount make all API get requests and store tehm in state
    componentDidMount() {
        // fetch dogs and store them in state
        fetch(`http://localhost:8000/pets/api/getalldogs`)
            .then(res => res.json())
            .then(dogs => {
                this.setState({
                    dogs
                })
            });
        // fetch cats and store them in state
        fetch(`http://localhost:8000/pets/api/getallcats`)
            .then(res => res.json())
            .then(cats => {
                this.setState({
                    cats
                })
            });
        // fetch people and store them in state
        fetch(`http://localhost:8000/people`)
            .then(res => res.json())
            .then(people => {
                this.setState({
                    people
                })
            });

        // fetch next cat in line
        fetch(`http://localhost:8000/pets/api/nextcat`)
            .then(res => res.json())
            .then(nextCat => {
                this.setState({
                    nextCat
                })
            })

        // fetch next dog in line
        fetch(`http://localhost:8000/pets/api/nextdog`)
            .then(res => res.json())
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

    adoptNow = () => {
        fetch(`http://localhost:8000/pets/api/removecat`, {
            method: 'delete'
        })
            .then(res => res.json())
        const catList = { ...this.state.cats };
        Object.keys(catList).shift();
        console.log('catList', catList)
        this.setState({
            adopted: true
        })
        // push to confirmation page
        console.log(this.state.cats);

    }


    render() {
        if (!this.state.adopted) {
            return (
                <div className='adoption-page'>
                    <Header />
                    <hr />
                    <PersonQueue
                        addCurrentUser={this.addCurrentUser}
                        people={this.state.people} />
                    <div className='pets-and-queue'>
                        <NextCat
                            nextCat={this.state.nextCat}
                            adoptNow={this.adoptNow} />
                        <NextDog nextDog={this.state.nextDog} />
                    </div>

                </div>
            )
        }
        else {
            return (
                <div className='confirmation-page'>
                    <ConfirmationPage
                        cats={this.state.cats}
                        nextCat={this.state.nextCat}
                        dogs={this.state.dogs}
                        currentUser={this.state.currentUser} />
                </div>
            )
        }

    }
}

export default AdoptionPage;




import React from 'react';
import Header from './Header';
import NextCat from './NextCat';
import NextDog from './NextDog';
import PersonQueue from './PersonQueue';

class AdoptionPage extends React.Component {
    state = {
        people: [],
        currentUser: '',
        cats: [],
        dogs: [],
        nextCat: {},
        nextDog: {},
        adopting: false,
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
        this.setState({
            currentUser: name
        })
    }


    render() {
        return (
            <div className='adoption-page'>
                <Header />
                <hr />

                <PersonQueue
                    addCurrentUser={this.addCurrentUser}
                    people={this.state.people} />
                <div className='pets-and-queue'>
                    <NextCat nextCat={this.state.nextCat} />
                    <NextDog nextDog={this.state.nextDog} />
                </div>

            </div>
        )
    }
}

export default AdoptionPage;




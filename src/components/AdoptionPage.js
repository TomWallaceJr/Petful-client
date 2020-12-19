import React from 'react';
import Header from './Header';
import PersonQueue from './PersonQueue';

class AdoptionPage extends React.Component {
    state = {
        people: [],
        currentUser: '',
        cats: [],
        dogs: [],
        adopting: false,
        error: null
    }


    componentDidMount() {
        // fetch dogs and store them in state
        fetch(`http://localhost:8000/pets/api/getalldogs`)
            .then(res => res.json())
            .then(dogs => {
                console.log(dogs)
                this.setState({
                    dogs
                })
            });
        // fetch cats and store them in state
        fetch(`http://localhost:8000/pets/api/getallcats`)
            .then(res => res.json())
            .then(cats => {
                console.log(cats)
                this.setState({
                    cats
                })
            });
        // fetch people and store them in state
        fetch(`http://localhost:8000/people`)
            .then(res => res.json())
            .then(people => {
                console.log(people)
                this.setState({
                    people
                })
            });
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
                <PersonQueue addCurrentUser={this.addCurrentUser} />
            </div>
        )
    }
}

export default AdoptionPage;




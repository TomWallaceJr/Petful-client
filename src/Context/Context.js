import React from 'react';

const PetfulContext = React.createContext({
    dogs: {},
    cats: {},
    nextDog: {},
    nextCat: {},
    people: [],
    currentUser: '',
    setDogs: () => { },
    setCats: () => { },
    setCurrentUser: () => { },
    setNextCat: () => { },
    setNextDog: () => { },
    setPeople: () => { },
});

export default PetfulContext;

export class PetfulProvider extends React.Component {
    state = {
        dogs: {},
        cats: {},
        people: [],
        currentUser: '',
        nextCat: {},
        nextDog: {}
    };

    setPeople = names => {
        this.setState({
            people: [names]
        });
    };

    setCurrentUser = currentUser => {
        this.setState({
            currentUser
        })
    }

    setCats = (cats) => {
        this.setState({
            cats
        });
    };
    setDogs = (dogs) => {
        this.setState({
            dogs
        });
    };

    setNextCat = (nextCat) => {
        this.setState({
            nextCat
        });
    }

    setNextDog = (nextDog) => {
        this.setState({
            nextDog
        });
    }

    render() {
        const value = {
            dogs: this.state.dogs,
            cats: this.state.cats,
            people: this.state.people,
            currentUser: this.state.currentUser,
            nextCat: this.state.nextCat,
            nextDog: this.state.nextDog,
            setCats: this.setCats,
            setDogs: this.setDogs,
            setPeople: this.setPeople,
            setCurrentUser: this.setCurrentUser,
            setNextCat: this.setNextCat,
            setNextDog: this.setNextDog
        };

        return (
            <PetfulContext.Provider value={value}>
                {this.props.children}
            </PetfulContext.Provider>
        );
    }
}
import React from 'react';

const PetfulContext = React.createContext({
    dogs: {},
    cats: {},
    nextDog: {},
    nextCat: {},
    people: {},
    currentUser: '',
    setDogs: () => { },
    setCats: () => { },
    setNextCat: () => { },
    setNextDog: () => { },
    setPeople: () => { },
});

export default PetfulContext;

export class PetfulProvider extends React.Component {
    state = {
        dogs: {
            list: []
        },
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
        this.setState({ currentUser })
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
            setCats: this.state.setCats,
            setDogs: this.state.setDogs,
            setPeople: this.state.setPeople,
            setCurrentUser: this.state.setCurrentUser,
            setNextCat: this.state.setNextCat,
            setNextDog: this.state.setNextDog
        };

        return (
            <PetfulContext.Provider value={value}>
                {this.props.children}
            </PetfulContext.Provider>
        );
    }
}
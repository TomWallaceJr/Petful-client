import React from 'react';
import PetfulContext from '../Context/Context';

export default class NextDog extends React.Component {
    static contextType = PetfulContext;

    render() {
        const nextDog = this.context.dogs[0];
        const { age, breed, imageDescription, imageURL, name, sex, story } = nextDog;

        if (!name) {
            return (
                <div className='next-pet-container'>
                    <label>All of our Dogs have been adopted! Try again another day!</label>
                </div>
            );
        };
        return (
            <div className='next-pet-container'>
                <h2>Meet {name}!</h2>
                <img src={imageURL} alt={imageDescription}></img>
                <p>{age} year old {sex} {breed}</p>
                <p>{story}</p>
                {this.props.realPerson ? (
                    <button
                        className='adopt-button'
                        onClick={this.props.adoptDogNow}>
                        Adopt Now
                    </button>
                ) : null}
            </div>
        );
    };
};


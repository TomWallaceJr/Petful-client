import React from 'react';


class NextCat extends React.Component {

    render() {
        const nextCat = this.props.nextCat;
        const { age, breed, imageDescription, imageURL, name, sex, story } = nextCat;

        if (!name) {
            return (
                <div className='next-pet-container'>
                    <label>All of our Cats have been adopted! Try again another day!</label>
                </div>
            )
        }
        return (
            <div className='next-pet-container'>
                <h2>Meet {name}!</h2>
                <img src={imageURL} alt={imageDescription}></img>
                <p>{age} year old {sex} {breed}</p>
                <p>{story}</p>
                <button
                    className='adopt-button'
                    onClick={this.props.adoptCatNow}>
                    Adopt Now
                </button>
            </div>
        )
    }
}

export default NextCat;
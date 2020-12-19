import React from 'react';


class NextDog extends React.Component {



    render() {
        const nextDog = this.props.nextDog;
        const { age, breed, imageDescription, imageURL, name, sex, story } = nextDog
        return (
            <div className='next-pet-container'>
                <h2>Meet {name}!</h2>
                <img src={imageURL} alt={imageDescription}></img>
                <p>{age} year old {sex} {breed}</p>
                <p>{story}</p>
                <button className='adopt-button'>Adopt Now</button>
            </div>
        )
    }
}

export default NextDog;
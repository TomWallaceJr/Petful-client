import React from 'react';


class NextCat extends React.Component {

    render() {
        const nextCat = this.props.nextCat;
        const { age, breed, imageDescription, imageURL, name, sex, story } = nextCat
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

export default NextCat;
import React from 'react';


export default class PetPic extends React.Component {

    render() {
        const { imageURL, name, imageDescription } = this.props.details;
        return (
            <li className='pet-pic-list'>
                <div className='pet-pic'>
                    <p>{name}</p>
                    <img src={imageURL} alt={imageDescription} />
                </div>
            </li>
        );
    };
};


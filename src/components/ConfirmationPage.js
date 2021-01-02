import React from 'react';
import { Link } from 'react-router-dom';
import PetfulContext from '../Context/Context';
import Header from './Header';


class ConfirmationPage extends React.Component {
    static contextType = PetfulContext;

    render() {
        const adoptedPet = this.context.adoptedPet;
        const user = this.context.currentUser;

        return (
            <div className='confirmation-page'>
                <h2>Congrats {user}! You adopoted {adoptedPet.name}!</h2>
                <div className='confirmPic'>
                    <img src={adoptedPet.imageURL} alt={adoptedPet.description}></img>
                    <Link to='/'><button>Back to Home!</button></Link>
                </div>
            </div>
        )
    };
};
export default ConfirmationPage
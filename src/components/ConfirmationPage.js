import React from 'react';
import { Link } from 'react-router-dom';
import PetfulContext from '../Context/Context';

class ConfirmationPage extends React.Component {
    static contextType = PetfulContext;

    render() {
        const adoptedPet = this.context.adoptedPet;
        const user = this.context.currentUser;

        return (
            <div className='confirmation-page'>
                <h1>Congrats {user}! You adopoted {adoptedPet.name}!</h1>
                <div className='confirmPic'>
                    <img src={adoptedPet.imageURL} alt={adoptedPet.description}></img>
                    <Link to='/'><button>Back to Home!</button></Link>
                </div>

            </div>
        )
    }
}
export default ConfirmationPage
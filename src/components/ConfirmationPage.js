import React from 'react';
import { Link } from 'react-router-dom';
import PetfulContext from '../Context/Context';



class ConfirmationPage extends React.Component {
    static contextType = PetfulContext;

    removePet = () => {
        console.log('unmounting')
        fetch(`${config.API_BASE_URL}/pets/api/removecat`, {
            method: 'delete',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
            .then(cats => {
                this.context.setCats(cats);
                this.context.setAdoptedPet(this.context.cats[0]);
            });
    }


    render() {
        const adoptedPet = this.context.adoptedPet;
        const user = this.context.currentUser;

        return (
            <div className='confirmation-page'>
                <h2>Congrats {user}! You adopted {adoptedPet.name}!</h2>
                <div className='confirmPic'>
                    <img src={adoptedPet.imageURL} alt={adoptedPet.description}></img>
                    <button onClick={() => this.removePet()}>Back Home!</button>
                </div>
            </div>
        )
    };
};
export default ConfirmationPage
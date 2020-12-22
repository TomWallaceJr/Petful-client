import React from 'react';
import { Link } from 'react-router-dom';

class ConfirmationPage extends React.Component {

    render() {
        const cats = this.props.cats;
        const dogs = this.props.dogs;
        const user = this.props.currentUser;
        const type = this.props.type;

        if (type === 'cat') {
            return (
                <div className='confirmation-page'>
                    <h1>Congrats {user}! You adopoted {cats[0].name}!</h1>
                    <img src={cats[0].imageURL} alt={cats[0].description}></img>
                    <Link to='/'><button>Back to Home!</button></Link>
                </div>
            )
        }

        if (type === 'dog') {
            return (
                <div className='confirmation-page'>
                    <h1>Congrats {user}! You adopoted {dogs[0].name}!</h1>
                    <img src={dogs[0].imageURL} alt={dogs[0].description}></img>
                    <Link to='/'><button>Back to Home!</button></Link>
                </div>
            )
        }

        else {
            return (
                <h1>Something Went Wrong! Please refresh!</h1>
            )
        }
    }
}
export default ConfirmationPage
import React from 'react';
import Person from './Person';
import PetfulContext from '../Context/Context';
import config from '../config';

class PersonQueue extends React.Component {
    static contextType = PetfulContext;

    state = {
        name: '',
        signedUp: false
    }

    handleNameChange = e => {
        this.setState({
            name: e.currentTarget.value,
        });
    };

    submitForm = (e) => {
        e.preventDefault();
        const name = this.state.name;


        fetch(`${config.API_BASE_URL}/people`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name
            })
        }).then(res => res.json())
            .then(res => { this.context.setCurrentUser(res) })
            .catch(error => {
                alert(`Something went wrong! ${error.message}`)
            })

        if (this.context.currentUser) {
            this.setState({
                signedUp: true
            })
        }
        e.currentTarget.reset();
    }


    render() {

        return (
            <>
                <div className='person-queue'>
                    <h3>Next Up</h3>
                    <ul>
                        {this.context.people.map((key, i) =>
                            <Person
                                key={i}
                                index={i}
                                name={this.props.people[key]} />)}
                    </ul>
                    <form className='add-person-form' onSubmit={this.submitForm}>
                        <input
                            className='name-textbox'
                            type='text'
                            name='name'
                            onChange={e => { this.handleNameChange(e) }}
                            placeholder='Your Name'
                            required
                        />

                        <button
                            className='line-button'
                        // disabled={!this.state.signedUp}
                        >Get In Line!</button>
                    </form>
                </div>
            </>
        )
    }

}

export default PersonQueue;
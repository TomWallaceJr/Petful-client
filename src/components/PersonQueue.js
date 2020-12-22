import React from 'react';
import Person from './Person';
import config from '../config';

class PersonQueue extends React.Component {

    state = {
        signedUp: false
    }

    nameRef = React.createRef();


    // On form submit this method will 
    // 1. set current user value in state to entered name
    // 2. Make POST request to API that will attempt to add user to persons queue
    // 3. Reset Form
    submitForm = (e) => {
        e.preventDefault();
        const name = this.nameRef.current.value;
        // this.setState({
        //     signedUp: true
        // })
        // Update CurrentUser in Main State
        this.props.addCurrentUser(name);
        // make POST request to REST API and add current user to people queue
        try {
            fetch(`${config.API_BASE_URL}/people`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name
                })
            }).then(res => {
                //console.log(res)
                return res.json()
            }).catch(error => {
                alert(`Something went wrong! ${error.message}`)
            })
        }
        catch (error) {
            alert('Something went wrong!')
            console.log(error)
        }
        //reset form
        e.currentTarget.reset();
        this.props.startTimer();
    }


    render() {

        return (
            <>
                <div className='person-queue'>
                    <h3>Next Up</h3>
                    <ul>
                        {Object.keys(this.props.people).map((key, i) =>
                            <Person
                                key={i}
                                index={i}
                                name={this.props.people[key]} />)}
                    </ul>
                    <form className='add-person-form' onSubmit={this.submitForm}>
                        <input
                            className='name-textbox'
                            type='text'
                            ref={this.nameRef}
                            name='name'
                            placeholder='Your Name'
                            required
                        />

                        <button
                            className='line-button'
                        // disabled={this.state.signedUp}
                        >Get In Line!</button>
                    </form>
                </div>
            </>
        )
    }

}

export default PersonQueue;
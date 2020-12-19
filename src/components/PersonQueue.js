import React from 'react';
import config from '../config';

class PersonQueue extends React.Component {

    nameRef = React.createRef();


    // On form submit this method will 
    // 1. set current user value in state to entered name
    // 2. Make POST request to API that will attempt to add user to persons queue
    // 3. Reset Form
    submitForm = (e) => {
        e.preventDefault();
        const name = this.nameRef.current.value;
        console.log(name);
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
            }).then(result => {
                console.log(result)
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
    }

    render() {
        return (
            <>
                <div className='person-queue'>
                    <h3>Queue</h3>
                    <ul>
                        <li>Person 1</li>
                        <li>Person 2</li>
                        <li>Person 3</li>
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
                        <button className='line-button'>Get In Line!</button>
                    </form>
                </div>
            </>
        )
    }

}

export default PersonQueue;
import React from 'react';
import PetfulContext from '../Context/Context';
import config from '../config';

class PersonQueue extends React.Component {
    static contextType = PetfulContext;

    state = {
        name: '',
        currentUser: '',
        nextUp: false,
        signedUp: false,
        intervalId: 0
    };

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
            .then(res => {
                this.context.setCurrentUser(name)
                this.context.setPeople(res);
                this.setState({
                    signedUp: true,
                    currentUser: name,
                })
            })
            .catch(error => {
                alert(`Something went wrong! ${error.message}`)
            });
        e.currentTarget.reset();

        //starts demo adoption timer
        this.startTimer();
    };

    startTimer = () => {
        // declare fake users in array
        const fakeUsers = ['Joe', 'Jim', 'Jake', 'Keri', 'Steve', 'Conner', 'Jill'];
        this.state.intervalId = setInterval(() => {
            if (this.context.currentUser === this.props.peopleList[0]) {
                console.log('setting next up and realperson')
                this.props.setNextUp();
                return clearInterval(this.state.intervalId);
            } else if (this.context.currentUser !== this.props.peopleList[0]) {
                // if less than two users add fake user to queue in context
                if (this.props.peopleList.length <= 3) {
                    console.log('adding a person')
                    // generate random index
                    let index = Math.floor(Math.random() * 6) + 1;
                    fetch(`${config.API_BASE_URL}/people`, {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: fakeUsers[index]
                        })
                    }).then(res => res.json())
                        .then(res => this.context.setPeople(res));
                }
                // generate random num if even adopt cat if odd adoptDog
                let random = Math.floor(Math.random() * 2);
                if (random % 2 == 0) {
                    this.props.adoptCatNow();
                } else {
                    this.props.adoptDogNow();
                }
            }
        }, 5000)
    };

    componentWillUnmount() {
        return clearInterval(this.state.intervalId);
    };

    render() {
        return (
            <>
                <div className='person-queue'>
                    <h3>Waiting In Line</h3>
                    <ul>
                        {this.context.people.map((names) => {
                            return names.map((name, i) => {
                                return (
                                    <li key={i}>{name}</li>
                                )
                            })
                        })}
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
                            disabled={this.state.signedUp}
                        >Get In Line!</button>
                    </form>
                </div>
            </>
        )
    };
};

export default PersonQueue;
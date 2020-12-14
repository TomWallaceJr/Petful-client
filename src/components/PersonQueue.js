import React from 'react'

export default class PersonQueue extends React.Component {
    state = {
        people: [],
        newUser: ''
    }

    componentDidMount() {
        // fetch people and store them in state
        fetch(`http://localhost:8000/people`)
            .then(res => res.json())
            .then(people => {
                console.log(people)
                this.setState({
                    people
                })
            });
    }

    handleChange(e) {
        //val = val.trim();
        console.log(e.target.value)
        this.setState({
            newUser: e.target.value
        })
    }

    handleGetInLineClick() {
        console.log('hi')
        if (!this.state.newUser) {
            alert('Please enter your name!');
            return;
        }
        fetch('http://localhost:8000/people', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.newUser
            })
        })
            .then(res => res.json())
            .then(result => {
                if (result.name) {
                    console.log(result.name)
                }
                else {
                    alert('Something went wrong! Please try again!')
                }
            })


    }

    render() {
        return (
            <>
                <div className='personQ'>
                    <ul>
                        <li>Person 1</li>
                        <li>Person 2</li>
                        <li>Person 3</li>
                    </ul>
                    <form>
                        <input
                            className='name-textbox'
                            type='text'
                            name='name'
                            placeholder='Your Name'
                            //value={this.state.newUser ? this.state.newUser : ''}
                            onChange={this.handleChange}
                            required
                        />
                        <button
                            className='line-button'
                            type='button'
                            onClick={() => this.handleGetInLineClick()}>Get In Line!</button>
                    </form>
                </div>
            </>
        )
    }

}
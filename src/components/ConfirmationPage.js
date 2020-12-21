import React from 'react'

class ConfirmationPage extends React.Component {

    render() {
        const cats = this.props.cats;
        return (
            <div>
                <h1>Congrats! You adopoted</h1>
            </div>
        )
    }
}
export default ConfirmationPage
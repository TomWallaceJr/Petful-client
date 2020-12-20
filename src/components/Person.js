import React from 'react'

class Person extends React.Component {
    render() {
        const { name } = this.props;
        return (
            <li>{name}</li>
        )
    }
}

export default Person;

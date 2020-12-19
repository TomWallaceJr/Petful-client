import React from 'react'


class AdoptionPage extends React.Component {
    state = {
        people: [],
        cats: [],
        dogs: [],
        adopting: false,
        error: null
    }

    // sets adopting state to true which will render adopting page
    adoptButtonClick() {
        console.log('click');
        this.setState({
            adopting: true
        })
    }

    componentDidMount() {
        // fetch dogs and store them in state
        fetch(`http://localhost:8000/pets/api/getalldogs`)
            .then(res => res.json())
            .then(dogs => {
                console.log(dogs)
                this.setState({
                    dogs
                })
            });
        // fetch cats and store them in state
        fetch(`http://localhost:8000/pets/api/getallcats`)
            .then(res => res.json())
            .then(cats => {
                console.log(cats)
                this.setState({
                    cats
                })
            });

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

    render() {
        return (
            <div className='adoption-page'>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default AdoptionPage;




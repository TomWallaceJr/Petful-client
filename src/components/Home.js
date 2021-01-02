import React from 'react';
import Header from './Header';



class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <div className='home-img-wrapper'>
                    <div className='pics'>
                        <img src={require('../images/adoptkitten.jpeg')} alt='cat'></img>
                    </div>
                    <div>
                        <Header />
                    </div>
                    <div className='pics'>
                        <img src={require('../images/adopt.jpeg')} alt='puppy'></img>
                    </div>
                </div>
                <div className='home-body'>
                    <p>This is a Pet adoption agency where you get in line and can either adopt the next
                    dog or next cat in line for adoption!
                </p>
                    <p>Enjoy your rescue pet!</p>
                    <button onClick={() => this.props.history.push('/adopt')}>Adopt Now!</button>
                </div>
            </div>
        )
    };
};

export default Home;
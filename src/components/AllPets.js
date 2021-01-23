import React from 'react';
import PetfulContext from '../Context/Context';
import PetPic from './PetPic';

export default class AllPets extends React.Component {
    static contextType = PetfulContext;

    render() {
        return (
            <section className='cats-and-dogs'>
                <div className='available-pets'>
                    <h3>All Available Cats</h3>
                    <ul className='pet-list'>
                        {Object.keys(this.context.cats).map(key => {
                            return (
                                <PetPic
                                    key={key}
                                    index={key}
                                    details={this.context.cats[key]}
                                />
                            )
                        })}
                    </ul>
                </div>
                <div className='available-pets'>
                    <h3>All Available Dogs</h3>
                    <ul className='pet-list'>
                        {Object.keys(this.context.dogs).map(key => {
                            return (
                                <PetPic
                                    key={key}
                                    index={key}
                                    details={this.context.dogs[key]}
                                />
                            )
                        })}
                    </ul>
                </div>


            </section>
        )
    }
}
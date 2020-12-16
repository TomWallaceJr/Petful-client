import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import PersonQueue from './PersonQueue'
import NextCat from './NextCat'
import NextDog from './NextDog'

export default function Home() {
    return (
        <>
            <h1>Adoption Page</h1>
            <hr />
            <PersonQueue />
            <p>Adopt the next puppy or kitten in line here!
            </p>
            <NextCat />
            <NextDog />
        </>
    )
}
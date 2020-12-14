import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import PersonQueue from './PersonQueue'

export default function Home() {
    return (
        <>
            <h1>Adoption Page</h1>
            <hr />
            <PersonQueue />
            <p>This is a Pet adoption agency where you get in line and can either adopt the next
            dog or next cat in line for adoption!
            </p>
            <p>Enjoy your rescue pet!</p>
        </>
    )
}
import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <h1>Adoption</h1>
            <hr />
            <p>This is a Pet adoption agency where you get in line and can either adopt the next
            dog or next cat in line for adoption!
            </p>
            <p>Enjoy your rescue pet!</p>
            <button>Adopt Now!</button>
        </>
    )
}
import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

export default function Home(props) {
    return (
        <>
            <h1>Welcome To Petful!</h1>
            <hr />
            <p>This is a Pet adoption agency where you get in line and can either adopt the next
            dog or next cat in line for adoption!
            </p>
            <p>Enjoy your rescue pet!</p>
            <button onClick={() => props.adoptButtonClick()}>Adopt Now!</button>
        </>
    )
}
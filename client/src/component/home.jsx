import React from 'react'
import { Link, Route,  BrowserRouter as Router } from 'react-router-dom'
import DataArea from './dataArea'
import styles from './home.module.css'

function Home() {
    return (
        <Router>
            <div>
                Hi!
            </div>
        </Router>
    )
}

export default Home

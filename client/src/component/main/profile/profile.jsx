import React from 'react'
import styles from './profile.module.css'

function Profile({match, history, location}) {
    return (
        <div>
            <pre>MATCH{JSON.stringify(match, null, 2)}</pre>
            <pre>HISTORY{JSON.stringify(location, null, 2)}</pre>
            <pre>LOCATION{JSON.stringify(history, null, 2)}</pre>
        </div>
    )
}

export default Profile

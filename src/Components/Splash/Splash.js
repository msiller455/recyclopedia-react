import React from 'react'
import { withRouter } from 'react-router-dom'
import './Splash.css'

const Splash = () => {
    return (
        <div className="splash">
            <div className="title">
                <h1>cali | OCIAL</h1>
                <h3>social solutions towards cleaner beaches</h3>
            </div>
        </div>
    )
}

export default withRouter(Splash)
import React from 'react'
import { withRouter } from 'react-router-dom'
import './Splash.css'

const Splash = () => {
    return (
        <div className="splash">
            <div className="splashImage">
                <div className="title">
                    <h1>cali.OCIAL</h1>
                    <h3>Social solutions towards cleaner beaches</h3>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Splash)
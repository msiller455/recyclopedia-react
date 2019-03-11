import React from 'react'
import { withRouter } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="copyright">© 2019 Michael Siller</div>
            <div className="mediaLinks">
                <a className="footerButton" href='https://github.com/msiller455' ><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github"/></a>
                <a className="footerButton" href='ttps://www.linkedin.com/in/michaelasiller/' ><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" alt="linkedin"/></a>
                <a className="footerButton" href='https://www.instagram.com/chum455/' ><img src="http://cdn.onlinewebfonts.com/svg/img_465937.png" alt="instagram"/></a>
            </div>
        </div>
    )
}

export default withRouter(Footer)
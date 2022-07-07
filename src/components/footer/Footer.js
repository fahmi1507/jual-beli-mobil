import React from 'react'
import './footer.styles.css'

const Footer = () => {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social">
                    <span><i className="icon ion-social-instagram"></i></span>
                    <span><i className="icon ion-social-snapchat"></i></span>
                    <span><i className="icon ion-social-twitter"></i></span>
                    <span><i className="icon ion-social-facebook"></i></span>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><span>Home</span></li>
                    <li className="list-inline-item"><span>Services</span></li>
                    <li className="list-inline-item"><span>About</span></li>
                </ul>
                <p className="copyright">DjuBli © 2022</p>
            </footer>
        </div>
    )
}

export default Footer
import React from 'react'
import '../CSS/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="row1">
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
            </div>

            <div className="row">
                <ul>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </div>

            <div className="row">
                QUIZWIZ Copyright © 2023 QuizWiz - All rights reserved
            </div>
        </div>
    )
}
export default Footer;
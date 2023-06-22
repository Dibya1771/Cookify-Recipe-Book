import React, { useEffect } from 'react';
import '../../CSS/Login.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import image from '../../Images/undraw_cooking_p7m1.svg';


function SignUp() {
    useEffect(() => {

        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const main = document.getElementById('main');

        signUpButton.addEventListener('click', () => {
            main.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            main.classList.remove('right-panel-active');
        });

        return () => {
            signUpButton.removeEventListener('click', () => {
                main.classList.add('right-panel-active');
            });

            signInButton.removeEventListener('click', () => {
                main.classList.remove('right-panel-active');
            });
        };
    }, []);

    return (
        <div id='cont_body'>
            <div className="a_container" id="main">
                <div className="a_sign-up">
                    <form action="#" className="aa_form">
                        <h1 className='aa_nn_me'>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <FacebookRoundedIcon />
                            </a>
                            <a href="#" className="social">
                                <GoogleIcon />
                            </a>
                            <a href="#" className="social">
                                <LinkedInIcon />
                            </a>
                        </div>

                        <input type="text" name="txt" placeholder="Name" required className='a_boxx' />
                        <input type="email" name="email" placeholder="email" required className='a_boxx' />
                        <input type="password" name="pswd" placeholder="Password" required className='a_boxx' />
                        <div className='seperate'>
                            <select
                                id="gender" class="box6" required>
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option></select>
                            <input id="dob" type="date" placeholder="" required />
                        </div>

                        <button className='a_button'>Sign UP</button>
                    </form>
                </div>
                <div className="a_sign-in">
                    <form action="#" className="aa_form">
                        <h1 className='aa_nn_me'>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <FacebookRoundedIcon />
                            </a>
                            <a href="#" className="social">
                                <GoogleIcon />
                            </a>
                            <a href="#" className="social">
                                <LinkedInIcon />
                            </a>
                        </div>

                        <input type="email" name="email" placeholder="email" required className='a_boxx' />
                        <input type="password" name="pswd" placeholder="Password" required className='a_boxx' />
                        <a href="#">Forgot your Password?</a>
                        <button className='a_button'>Sign In</button>
                    </form>
                </div>
                <div className="a_overlay-container">
                    <div className="a_overlay">
                        <div className="a_overlay-left">
                            <h1 className='a_hh1'>Welcome Back!</h1>
                            <p className='a_hh1'>To keep connected with us please login with your personal info</p>
                            <button id="signIn" className='a_button'>Sign In</button>
                        </div>
                        <div className="a_overlay-right">
                            <h1 className='a_hh1'>Hello, Friend!</h1>
                            <p className='a_ppp'>Enter your personal details and start journey with us</p>
                            <button id="signUp" className='a_button'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignUp
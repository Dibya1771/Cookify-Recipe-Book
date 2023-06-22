import React from 'react';
import "../../CSS/Contact.css";

const Contact = () => {
    return (
        <div id="S_wrap">
            <h1>SEND A MESSAGE</h1>
            <br /><br /><br />
            <div id="S_form-wrap">
                <form id='S_S_form'>
                    <p>Contact Us Through Email</p>
                    <label htmlFor="email" className='S_label'>Your Query:</label>
                    <textarea name="message" id="message" placeholder="Your Message" className='s_textarea' />
                    <label htmlFor="name" className='S_label'>Your Name:</label>
                    <input type="text" name="name" value="" id="name" className='S_inp_s' />

                    <label htmlFor="email" className='S_label'>Your Email:</label>
                    <input type="text" name="email" value="" id="email" className='S_inp_s' />

                    <input type="submit" name="submit" value="SEND" id='S_sub' />
                </form>
            </div>
        </div>
    );
}

export default Contact;
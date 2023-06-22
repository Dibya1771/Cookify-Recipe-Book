import React from 'react';
import "../../CSS/Contact.css";

const Contact = () => {
  return (
    <div id="S_wrap">
      <h1>SEND A MESSAGE</h1>
      <br /><br /><br />
      <div id="S_form-wrap">
        <form>
          <p>Contact Us Through Email</p>
          <label htmlFor="email">Your Query:</label>
          <textarea name="message" id="message" placeholder="Your Message" />
          <label htmlFor="name">Your Name:</label>
          <input type="text" name="name" value="" id="name" />

          <label htmlFor="email">Your Email:</label>
          <input type="text" name="email" value="" id="email" />

          <input type="submit" name="submit" value="SEND" />
        </form>
      </div>
    </div>
  );
}

export default Contact;

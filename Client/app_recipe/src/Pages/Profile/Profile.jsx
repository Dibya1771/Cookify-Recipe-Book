import React, { useState } from 'react';
import '../../CSS/Profile.css';
import AddRecipe from './AddRecipe';
import imagess from '../../Images/default_profile_image.png'
import Typewriter from 'typewriter-effect';




const Profile = () => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const openInfo = () => {
        setIsDetailsVisible(true);
    };

    const closeInfo = () => {
        setIsDetailsVisible(false);
    };

    return (
        <div className='profile'>
            <div className="d_update_form">
                <div id="d_set">
                    <h1>MY Profile</h1>
                    <div id="linemovement"></div>
                </div>
                <div className={`d_user ${isDetailsVisible ? '' : 'd_hide-details'}`} id="d_userBox">
                    <img
                        //src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
                        src={imagess}
                        alt="Photo"
                        onClick={openInfo}
                    />

                    <div className="d_info">
                        <h1>Biku Riki</h1>
                        {/* <p>
          Your recipe haven, showcasing your profile and culinary creations.
        </p> */}
                        <p>Email: cse.20bcse62@silicon.ac.in</p>
                        <p>Contact No: 7847902310</p>
                        <p>Gender: Male</p>
                        <p>DOB: 20/07/2002</p>

                        <a href="#">Update Profile</a>
                    </div>
                    <div className="d_close-icon" onClick={closeInfo}></div>
                </div>

                <h2>
                    Welcome to your profile page!<br />
                    Click on your image to explore and view your profile details
                </h2>
            </div>

            <div className="d_add_recipe_form">
                <h2>
                    <Typewriter
                        options={{
                            strings: ['Have you cooked something mouth-watering and want to share it with others? Click the Add Recipe button to showcase your culinary masterpiece to the community'],
                            autoStart: true,
                            loop: true,
                            // delay: 75,
                        }}
                    />
                </h2>
            </div>

            <AddRecipe />
        </div>
    );
};

export default Profile;

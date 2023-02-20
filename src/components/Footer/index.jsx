import React from "react";
import './index.css'

export const Footer = () => {
    return (
        <footer>
            <div className='leftSide'>
                <img src='https://1000logos.net/wp-content/uploads/2018/10/Twitch-logo.png' alt='logo' class='logo'/>
                <p class='twitch'>Join the Twitch community! Discover the best live streams anywhere.</p>
            </div>
            <div className='rightSide'>
                <img src='https://www.coffeebean.com.my/media/wysiwyg/Buttonsignup.png' alt='signUp' class='signUp'/>
            </div>
        </footer>
    )
};
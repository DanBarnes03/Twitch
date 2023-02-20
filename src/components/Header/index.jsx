import React from "react";
import './index.css'

export const Header = () => {
    return(
        <header>
            <div className='leftSide'>
                <img src='https://1000logos.net/wp-content/uploads/2018/10/Twitch-logo.png' alt='logo' class='logo'/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png' alt='menu' class='menu'/>
            </div>
            <div className="middle">
                <input type='text' className="search"/>
            </div>
            <div className="rightSide">
            <   img src="https://www.oseyo.co.uk/wp-content/uploads/2020/05/empty-profile-picture-png-2.png" alt="pfp" className="userPfp"/>
            </div>
        </header>
    )
};

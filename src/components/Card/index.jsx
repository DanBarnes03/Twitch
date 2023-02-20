import React from "react";
import './index.css'

export const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.data.img} alt='thumbNail' class='thumbNail'/>
            <div className='content'>
                <img src={props.data.pfp} alt='pfp' class='pfp'></img>
                <h1 class='title'>{props.data.title}</h1>
            </div>
            <div className='channel'>
                <p class='channelName'>{props.data.channel}</p>
                <p class='contentType'>{props.data.category}</p>
            </div>            
        </div>
    )
};

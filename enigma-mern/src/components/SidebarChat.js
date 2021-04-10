import React from 'react'
import './SidebarChat.css';
import Avatar from '../assets/jugal.png';

function SidebarChat() {
    return (
        <div className='Chat'>
            <div className='Chat-img'>
                <img src={Avatar}></img>
            </div>
            <div className='Chat-info'>
                <h2>Jugal Lad</h2>
                <p>That is amazing!</p>
            </div>
        </div>
    )
}

export default SidebarChat

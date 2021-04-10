import React from 'react'
import './Info.css'
import jugal from '../assets/jugal.png';
import {MdAccessTime} from 'react-icons/md';

function Info() {
    return (
    <div>
        <div className='info-img'>
            <img src={jugal} alt='user-img'></img>
        </div>
        <div className='info-header'>
            <h2>Jugal Lad</h2>
        </div>
        <div className='info-details'>
            <p>
                <span>Enigma ID</span>   JX78CQ
            </p>
            <p>
                <MdAccessTime className='info-icon'/> Last seen {new Date().toUTCString().slice(17,22)} PM
            </p>
            <p>jug091000@gmail.com</p>
        </div>
    </div>
    )
}

export default Info

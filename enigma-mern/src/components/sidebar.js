import React from 'react'
import SidebarChat from './SidebarChat';
import './sidebar.css'

function Sidebar(props) {

    const currentUser = props.currentUser
    console.log(currentUser)

    return (
        <div className='sidebar'>
            <div className='sidebar-search'>
                <input type='text' placeholder='search for something...'/>
            </div>
            <SidebarChat currentUser={currentUser}/>
        </div>
    )
}

export default Sidebar

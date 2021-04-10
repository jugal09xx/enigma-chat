import React from 'react'
import SidebarChat from './SidebarChat';
import './sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-search'>
                <input type='text' placeholder='search for something...'/>
            </div>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    )
}

export default Sidebar

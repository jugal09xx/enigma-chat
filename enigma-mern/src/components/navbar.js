import React, { useEffect, useState } from "react";
import "./navbar.css";
import {
  MdChatBubbleOutline,
  MdNotificationsNone,
  MdPeopleOutline,
  MdSettings,
  MdExitToApp,
  MdMoreVert,
  MdPersonOutline,
} from "react-icons/md";
import axios from 'axios';
import { useHistory } from "react-router";


function Navbar(props) {

  let history = useHistory()

  const [currentUser,setCurrentUser] = useState('')

  const url = 'http://localhost:9000'

  useEffect(() => {
    const getCurrentUser = () => {
      axios.get(`${url}/users/` + props.currentUser)
      .then(res => {
        const name = res.data.user.firstName
        setCurrentUser(name)
        console.log(currentUser)
      }).catch(error => {
        console.log(error)
      })
    }
    getCurrentUser();
  },[props.currentUser,currentUser])

  const handleLogout = () => {
    history.push('/')
  }

  const showUser = () => {
    alert(currentUser)
  }

  return (
    <div className="nav-body">
      <div className="nav-header">
        <h1>
          Enigma{" "}
          <span style={{ color: "#1095FF", fontWeight: "600" }}>Chat</span>
        </h1>
      </div>
      <div className="nav-control">
        <ul>
          <li>
              <MdChatBubbleOutline />
          </li>
          <li>
              <MdNotificationsNone />
          </li>
          <li>
            <MdPeopleOutline />
          </li>
          <li>
            <MdSettings />
          </li>
        </ul>
      </div>
      <div className="nav-profile">
        <ul>
          <li onClick={showUser}>
            Welcome {currentUser}
          </li>
          <li>
            <a onClick={handleLogout}><MdExitToApp/></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

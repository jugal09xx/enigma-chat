import React from "react";
import "./navbar.css";
import {
  MdChatBubbleOutline,
  MdNotificationsNone,
  MdPeopleOutline,
  MdSettings,
  MdMoreVert,
  MdPersonOutline,
} from "react-icons/md";

function Navbar() {
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
          <li>
            <MdPersonOutline />
          </li>
          <li>
            <MdMoreVert />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

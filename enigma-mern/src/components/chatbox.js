import React from "react";
import Info from "./Info.js";
import Chatcontent from "./Chatcontent.js"
import {MdInsertEmoticon,MdPhoto,MdSend} from 'react-icons/md'
import "./chatbox.css";

function Chatbox() {

  return (
    <div className="chatbox">
      <div className='chat-container'>
        <Chatcontent/>
        <div className="chat-send">
            <MdInsertEmoticon className='chat-send-icon1'/>
          <form>
            <input placeholder="type a message" type="text"></input>
            <button className='send-btn' type="submit"><MdSend className='send-btn-icon'/></button>
          </form>
          <MdPhoto className='chat-send-icon2'/>
        </div>
      </div>
      <div className="chatbox-info">
        <Info />
      </div>
    </div>
  );
}

export default Chatbox;

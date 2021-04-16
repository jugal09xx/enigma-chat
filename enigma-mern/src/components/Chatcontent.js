import React, { useEffect, useState } from 'react'
import './Chatcontent.css'
import axios from 'axios'

function Chatcontent(props) {

    const [conversation,setConversation] = useState('')

    useEffect(() => {
        const getConversation = () => {
            axios.get('http://localhost:9000/room/88a0e5c4ca6c4e1bbe26409866141365', headers)
            .then(res => {
                console.log(res.data.conversation)
                const conversation = res.data.conversation
                setConversation(conversation)
            }).catch(error => {
                console.log(error)
            })
        }
        getConversation()
    },[])

    const headers = {
        headers: {
            'authorization': localStorage.getItem('authorization')
        }
    }

    return (
        <div className='chatcontent'>
                    {conversation.map((msg, index) => (
                    <div>
                        <p className='chat-sender'>{conversation[0].postedByUser.firstName}</p>
                        <p className='chat-msg'>
                            <span className='chat-name'></span>
                                hi whats up 
                            <span className='chat-time'>5:32 PM</span>
                        </p>
                    </div>
                    ))}
                <p className='chat-msg chat-recv'>
                    <span className='chat-name'></span>
                        hello, im good
                     <span className='chat-time'>5:32 PM</span>
                </p>
        </div>
        
    )
}

export default Chatcontent

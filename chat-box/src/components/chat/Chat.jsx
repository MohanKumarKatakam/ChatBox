import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bot from './Bot';
import User from './User';
import './Chat.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Chat() {
    const rightArrow = <FontAwesomeIcon icon={faArrowRight} />
    const [inputValue, setInputValue] = useState("");
    const chats = useSelector(state => { return state.chat });
    const dispatch = useDispatch();
    chats.length == 1 && dispatch({
        type: 'ADD_CHAT',
        payload: {
            value: "Hello there !!",
            user: 'bot'
        }
    });
    chats.length == 3 && dispatch({
        type: 'ADD_CHAT',
        payload: {
            value: "I'm still in building state..",
            user: 'bot'
        }
    });
    return <div className='chat-styles'>
        <div className='container messages-styles'>
            {chats.map((chat, index) =>
                chat.user == "user" ? <User key={index} message={chat.value} /> : <Bot message={chat.value} />
            )}
        </div>
        <div className='input-fields row'>
            <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9 '>
                <input type='text' className='input-text' placeholder='Enter your message here'
                    value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
            </div>
            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3 '>
                <button className='send-button' onClick={() => {
                    inputValue.length > 0 && dispatch({
                        type: 'ADD_CHAT',
                        payload: {
                            value: inputValue,
                            user: 'user'
                        }
                    });
                    setInputValue("")
                }}>Send {rightArrow}</button>
            </div>
        </div>
    </div>;
}

export default Chat;


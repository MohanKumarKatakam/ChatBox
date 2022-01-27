import React from 'react';
import { useState } from 'react';
import './Conversation.scss'
import icon from '../../images/person.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Conversation(props) {
    const up = <FontAwesomeIcon icon={faChevronUp} />
    const down = <FontAwesomeIcon icon={faChevronDown} />
    const [isExpanded, setExpand] = useState(props.expand);
    return <div className='conversation-parent'>
        <div className='conv-head'>
            <b>{props.title}</b> <b className='pending-chats'>{`  ${props.pendingChats} `}</b>
            <button className='conv-button'
                onClick={() => { setExpand(!isExpanded) }}>{isExpanded ? up : down}
            </button>
        </div>
        {(isExpanded && props.data !== undefined) ? props.data.map((user, index) => {
            return <div className='person-row' key={index}>
                <button className='person-button' key={user.rollNo}>
                    <img src={icon} className="person-icon" alt="person-icon" />
                    <span className='person-name'>{user.name}</span>
                </button>
            </div>
        }) : null}
    </div>;
}

export default Conversation;

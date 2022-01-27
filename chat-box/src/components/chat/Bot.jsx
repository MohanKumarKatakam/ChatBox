import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import './Bot.scss';

function Bot({message}) {
    return <div className='row'>
        <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8 aligning-left'>
            <div>
            <FontAwesomeIcon className='bot-icon' icon={faRobot} /><span className='bot-styles'>{message}</span>
            </div>
        </div>
        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'></div>
    </div>;
}

export default Bot;

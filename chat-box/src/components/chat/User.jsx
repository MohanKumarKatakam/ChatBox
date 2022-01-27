import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './User.scss';

function User({ message }) {
    return <div className='row'>
        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'></div>
        <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8 aligning-right'>
            <span className='user-styles'>{message}</span><FontAwesomeIcon className='user-icon' icon={faUser} />
        </div>
    </div>;
}

export default User;

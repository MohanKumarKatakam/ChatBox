import React from 'react';
import './Profile.scss';
import profile from '../../images/person.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

function Profile() {
    return <div className='profile'>
        <img src={profile} className="profile-pic" alt="profile-pic" />
        <span className='profile-name'>Bill Bradford
        <div class="dropdown">
            <FontAwesomeIcon icon={faCog} />
            <div class="item">
                <button className='item-button'>Update Profile</button>
                <button className='item-button'>Preferences</button>
                <button className='item-button'>Logout</button>
            </div>
        </div>
        </span>
        
        <span className='profile-desig'>Lead UX/UI Designer</span>
        <div className='align-to-center'>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <span>Active</span>
        </div>

    </div>;
}

export default Profile;

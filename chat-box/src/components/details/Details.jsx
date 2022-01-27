import React from 'react';
import './Details.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faArchive } from '@fortawesome/free-solid-svg-icons'

function Details() {
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const archiveIcon = <FontAwesomeIcon icon={faArchive} />
  return <div className='user-details'>
      <h1>HB</h1>
      {mailIcon}<b className='user-data'>HenryBoyd@gmail.com</b> <br/>
      {userIcon}<b className='user-data'>Henry Boyd</b>
      <button className='user-archive'>Archive {archiveIcon}</button>
  </div>;
}

export default Details;

import React from 'react';
import './Onboard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

function Onboard() {
    const icon = <FontAwesomeIcon icon={faLink} />
  return <div  className='board-div'>
      <p className='board-heading'>Onboard Clients</p>
      <p className='board-data'>Share the link with prospects and discuss all stuff</p>
      <button className='copy-button'>Copy Link {icon}</button>
  </div>;
}

export default Onboard;

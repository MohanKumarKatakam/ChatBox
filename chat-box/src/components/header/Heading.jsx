import React from 'react';
import logo from '../../images/logo.svg';
import './Heading.scss';

function Heading() {
  return <div>
    <img src={logo} className="chatBox-logo" alt="chatBox-logo" /><span className='logo-heading'>QuickChat</span>
  </div>;
}

export default Heading;

import React from 'react';
import './Track.scss';

function Track(props) {
  return <div className='track-styles'>
      <div className='row'>
        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 icon-effets'>
            {props.icon}
        </div>
        <div className='col-xs-8 col-sm-8 col-md-6 col-lg-6 track-padding-left'>
            <p className='track-details'>{props.stamp}</p>
            <p className='track-title'>{props.title}</p>
        </div>
      </div>
  </div>;
}

export default Track;

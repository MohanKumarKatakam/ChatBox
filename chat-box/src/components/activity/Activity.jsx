import React from 'react';
import Track from './Track';
import './Activity.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faPersonBooth } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

function Activity() {
    const clock = <FontAwesomeIcon icon={faClock} />
    const person = <FontAwesomeIcon icon={faPersonBooth} />
    return <div className='activity-padding'>
        <div className='row'>
            <div className='col-xs-5 col-sm-5 col-md-6 col-lg-6 margin-bott'>
                <Track icon={clock} stamp={"16h"} title={"Time"} />
            </div>
            <div className='col-xs-5 col-sm-5 col-md-6 col-lg-6 margin-bott'>
                <Track icon={person} stamp={"188"} title={"Attended"} />
            </div>
            <div className='col-xs-5 col-sm-5 col-md-6 col-lg-6'>
                <Track icon={clock} stamp={"119"} title={"Meetings"} />
            </div>
            <div className='col-xs-5 col-sm-5 col-md-6 col-lg-6'>
                <Track icon={person} stamp={"41"} title={"Rejected"} />
            </div>
        </div>
        <div className='progress-head-div'>
            <span className='progress-heading'>Current week</span>
            <span className='progress-subheading'>Activity</span>
        </div>
        <div className='progress-div'>
            <div className="progress">
                <div className="progress-bar mon" role="progressbar">
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar tue" role="progressbar">
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar wed" role="progressbar">
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar thu" role="progressbar">
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar fri" role="progressbar">
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar sat" role="progressbar">
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar sun" role="progressbar">
                </div>
            </div>
        </div>
        <div className="row progress-day-div">
            <div class="col rotate"><span className='progress-day'>MON</span></div>
            <div class="col rotate"><span className='progress-day'>TUE</span></div>
            <div class="col rotate"><span className='progress-day'>WED</span></div>
            <div class="col rotate"><span className='progress-day'>THU</span></div>
            <div class="col rotate"><span className='progress-day'>FRI</span></div>
            <div class="col rotate"><span className='progress-day'>SAT</span></div>
            <div class="col rotate"><span className='progress-day'>SUN</span></div>
        </div>
    </div>

}

export default Activity;

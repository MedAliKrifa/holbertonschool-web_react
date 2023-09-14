import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/cancel.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const buttonStyle = {
    position: 'relative',
    float: 'right',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem'
}

export default function Notifications({displayDrawer}) {
    return (
        <div className="NotificationContainer">
            <div className="menuItem">
                <p>Your notifications</p>
            </div>
            { displayDrawer && <div className="Notifications">
                <button style={buttonStyle} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
                    <img src={closeIcon} alt='Close'></img>
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type="default" value="New course available"/>
                    <NotificationItem type="urgent" value="New resume available"/>
                    <NotificationItem type="urgent" html={{__html: getLatestNotification()}}/>
                </ul>
            </div> }
        </div>
    )
} 

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
}
  
Notifications.defaultProps = {
    displayDrawer: false
}
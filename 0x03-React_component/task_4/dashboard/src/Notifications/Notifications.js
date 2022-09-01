import React, { Component, Fragment } from 'react';
import "./Notifications.css";
import close_icon from "../assets/close-icon.png";
import { NotificationItem } from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { bool } from 'prop-types';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <Fragment>
        <div className='menuItem'>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 && (
                <NotificationItem value='No new notification for now' />
              )}
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                />
              ))}
            </ul>
            <button
              type='button'
              aria-label='Close'
              onClick={() => console.log('Close button has been clicked')}
              style={{
                display: 'inline-block',
                position: 'absolute',
                top: '56px',
                right: '16px',
                background: 0,
                border: 0,
                outline: 'none',
                cursor: 'pointer',
                zIndex: 1,
              }}
            >
              <img
                src={close_icon}
                alt=''
                style={{ width: '8px', height: '8px' }}
              />
            </button>
          </div>
        )}
      </Fragment>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.any),
};

export { Notifications };

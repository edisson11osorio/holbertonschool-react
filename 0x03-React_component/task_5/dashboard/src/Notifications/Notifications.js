import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import close_icon from "../assets/close-icon.png";
import { NotificationItem } from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import NotificationItemShape from './NotificationItemShape';
import { bool } from "prop-types";

class Notifications extends Component {
  // function that logs notification id to console
  markAsRead(id) {
    console.log(`Notification ${id} has been read`);
  }

  // function that makes the file only update when next listNotifications is longer than current
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }
  render() {
    // assign props to local variables
    const { listNotifications, displayDrawer } = this.props;

    return (
      <>
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              style={{
                position: "absolute",
                background: "transparent",
                border: "none",
                right: "20px",
              }}
              aria-label="close"
              onClick={() => {
                console.log("Close button has been clicked");
              }}
            >
              <img
                src={close_icon}
                alt="close"
                height="15px"
                width="15px"
              ></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {/* listNotifications is empty condition */}
              {listNotifications.length === 0 && (
                <li>
                  <p>No notification available yet</p>
                </li>
              )}
              {/* render listNotifications */}
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                  id={notification.id}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notification.propTypes = {
  displayDrawer: propTypes.bool,
  listNotifications: propTypes.arrayOf(NotificationItemShape),
};
export { Notifications };

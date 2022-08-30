import React from "react";
import Notifications from "./Notifications";

function NotificationItem(props) {
  return (
    <li
      data-notification-type={props.type}
      dangerouslySetInnerHTML={props.html}
    >
      {props.value}
    </li>
  );
}
export { NotificationItem };

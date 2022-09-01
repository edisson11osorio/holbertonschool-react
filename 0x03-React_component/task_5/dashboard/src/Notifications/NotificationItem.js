import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, value, html, markAsRead, id }) => {
	// props:
	// - type: string, required, default: 'default'
	// - value: string
	// - html: object with key '__html' and value: string
	if ((type && value) && (typeof type === 'string' && typeof value === 'string') && (!html)) return(<li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>)
	if ((!type) && (html) && (html.__html)) return(<li data-notification-type="default" dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>)
	if ((type) && (html) && (html.__html)) return(<li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>)
	return(<li data-notification-type="default" onClick={markAsRead(id)}>NotificationItem: invalid props</li>)
}


NotificationItem.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
	markAsRead: PropTypes.func,
	id: PropTypes.number,
}

NotificationItem.defaultProps = {
	type: 'default',
	markAsRead: () => {},
	id: 0,
}

export { NotificationItem };

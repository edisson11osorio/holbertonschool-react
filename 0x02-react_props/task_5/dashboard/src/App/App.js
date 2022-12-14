import React, { Component } from 'react'
import { Notifications } from "../Notifications/Notifications";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Login } from "../Login/Login";
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import { bool } from 'prop-types';

function App({isLoggedIn}) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
  ];

  return (
    <>
      <Notifications listNotifications={listNotifications} />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: bool,
};

/* Setting the default value of isLoggedIn to false. */
App.defaultProps = {
  isLoggedIn: false,
};

export default App;   

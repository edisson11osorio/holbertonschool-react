import React, { PureComponent } from "react";
import { Notifications } from "../Notifications/Notifications";
import { getLatestNotification } from "../utils/utils";
import { Header } from "../Header/Header";
import { Login } from "../Login/Login";
import { Footer } from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';
import { bool } from "prop-types";

// Implement class Components
class App extends PureComponent {
  // If App component is mounted, check if user is holding down 'control'
  // && 'h' keys simultaneously, and if so, alert and call logOut function.

  // Class function to check if component is mounted
  componentDidMount() {
    // e.preventDefault()
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'h') {
        alert('Logging you out')
        this.props.logOut()
      }
    })
  }
  // Class function to check if component is unmounted
	componentWillUnmount() {
		document.removeEventListener('keydown', (e) => {});
	}

  render() {
    // Assign props to local variables
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
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
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => undefined,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;

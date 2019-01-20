import React, { Component } from 'react';
import logo from '../../img/africa_map.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import '../../App.css';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            {' '}
            <i className="fas fa-home"> Home</i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            <i className="fas fa-clipboard-list"> Post Feed</i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-clipboard-list"> Dashboard</i>
          </Link>
        </li>
        <li className="nav-item">
          <a
            href="#"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            {' '}
            <b>
              Logout <span className="fas fa-sign-out-alt" />
            </b>
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{
                width: '25px',
                marginLeft: '5px'
              }}
              title="You must have a Gravatar connected to your email to display the image profile"
            />
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            <i className="fas fa-user-plus"> Sign Up</i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            <i className="fas fa-user-tie"> Login</i>
          </Link>
        </li>
      </ul>
    );

    return (
      // navbar fixed-top
      <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt=""
              // style={{ width: 90, marginTop: -7 }}
              className="logo"
            />
            Africa-Linked
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);

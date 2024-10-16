/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from '@americanexpress/one-app-router';
import { Provider } from 'reakit';
import * as System from 'reakit-system-bootstrap';
import { Button } from 'reakit/Button';
import styles from './styles.scss';

export default function NavBar() {
  const token = localStorage.getItem('SavedToken');

  const logoutUser = () => {
    localStorage.clear();
    window.location = '/login';
  };
  return (
    <>
      <Provider unstable_system={System}>
        <div className={styles.nav}>
          <div className={styles.sname}>
            Quick payments system
          </div>
          {!token ? (
            <Link className={styles.sname} to="/register">Register</Link>
          ) : null}

          {token ? (
            <Button
              className={styles.btnlog}
              onClick={logoutUser}
            >Logout
            </Button>
          ) : (
            <Button className={styles.btnlog}>
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </Provider>
    </>
  );
}

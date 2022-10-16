import classes from './Nav.module.css'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
  const [error, setError] = useState('');
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    setError('')
    try {
      await logout()
      navigate('/login')
    } catch {
      setError('Failed to logout')
    }
  }

  return (
    <nav>
      <div className={classes.navLeft}>
        <p className={classes.displayName}>{currentUser.displayName.charAt(0).toUpperCase() + currentUser.displayName.slice(1)}</p>
      </div>
      <div className={classes.navMiddle}>
        <a href="/" className={classes.navAnchor}><h1 className={classes.navName}>Chat Time</h1></a>
      </div>
      <div className={classes.navRight}>
        <ul className={classes.navLinks}>
          {currentUser && <a className={classes.navAnchor} href="/chat"><li className={classes.navLink}>Chat</li></a>}
         {!currentUser && <a className={classes.navAnchor} href="/login"><li className={classes.navLink}>Login</li></a>}
          {currentUser && <button
            className={classes.navAnchor}
            id={classes.logout}
            onClick={logoutHandler}>
            Logout</button>}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
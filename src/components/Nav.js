import classes from './Nav.module.css'

const Nav = () => {
  return (
    <nav>
      <div className={classes.navLeft}>
        <h1 className={classes.navName}>Better Health</h1>
      </div>
      <div className={classes.navRight}>
        <ul className={classes.navLinks}>
          <li className={classes.navLink}>Chat</li>
          <li className={classes.navLink}>Login</li>
          <li className={classes.navLink}>Logout</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
import classes from './Nav.module.css'

const Nav = () => {
  return (
    <nav>
      <div className={classes.navLeft}>
        <a href="" className={classes.navAnchor}><h1 className={classes.navName}>Better Health</h1></a>
      </div>
      <div className={classes.navRight}>
        <ul className={classes.navLinks}>
          <a className={classes.navAnchor} href=""><li className={classes.navLink}>Chat</li></a>
          <a className={classes.navAnchor} href=""><li className={classes.navLink}>Login</li></a>
          <a className={classes.navAnchor} href=""><li className={classes.navLink}>Logout</li></a>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
import classes from './Login.module.css'

const Login = () => {
  return (
    <section className={classes.login}>
      <h2 className={classes.title}>Log in</h2>
      <form className={classes.form}>
        <label htmlFor="email" className={classes.label}>E-mail</label>
        <input className={classes.input} type="email" />
        <label htmlFor="password" className={classes.label}>Password</label>
        <input className={classes.input} type="password" />
      </form>
      <p className={classes.signup}>Don't have an account? </p>
      <a href="/signup"><p className={classes.signup} id={classes.getStarted}>Let's get started</p></a>
    </section>
  );
}

export default Login;
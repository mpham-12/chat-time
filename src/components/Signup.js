import classes from './Login.module.css'

const Signup = () => {
  return (
    <section className={classes.login}>
      <h2 className={classes.title} id={classes.title}>Let's Get Started</h2>
      <form className={classes.form}>
        <label htmlFor="username" className={classes.label}>Username</label>
        <input className={classes.input} type="text" />
        <label htmlFor="email" className={classes.label}>E-mail</label>
        <input className={classes.input} type="email" />
        <label htmlFor="password" className={classes.label}>Password</label>
        <input className={classes.input} type="password" />
        <div className={classes.createAcc}>
        <button className={classes.createAccBtn}>Create Account</button>
        </div>
      </form>

    </section>
  );
}

export default Signup;
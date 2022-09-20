import {useRef, useState} from 'react';
import { useAuth } from '../context/AuthContext';

import classes from './ForgotPassword.module.css'

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const emailRef = useRef();
  
  const { forgotPassword } = useAuth();

  async function submitHandler(event) {
    event.preventDefault()

    try {
      setError('');
      setMessage('');
      setIsLoading(true);
      await forgotPassword(emailRef.current.value);
      setMessage('A password reset link has been sent to your email');
    } catch (event) {
      console.log(event)
      setError('The email you entered does not exist in our system');
    }
    emailRef.current.value = "";
    setIsLoading(false)
  };

  return (
    <section className={classes.forgotPassword}>
      <h2 className={classes.title}>Reset My Password</h2>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="email" className={classes.label}>E-mail</label>
        <input className={classes.input} type="email" ref={emailRef}/>

        <div className={classes.resetPass}>
        <button disabled={isLoading} className={classes.resetBtn}>Reset Password</button>
        </div>
      </form>
      <a href="/login"><p className={classes.signup} id={classes.getStarted}>Login here</p></a>
      <p className={classes.signup}>Don't have an account? </p>
      <a href="/signup"><p className={classes.signup} id={classes.getStarted}>Let's get started</p></a>
    </section>
  );
}

export default ForgotPassword;
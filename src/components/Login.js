import {useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import classes from './Login.module.css'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  
  const { login } = useAuth();

  const navigate = useNavigate()

  async function submitHandler(event) {
    event.preventDefault()

    try {
      setError('');
      setIsLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/chat')
    } catch (event) {
      console.log(event)
      setError('Login failed.');
    }
    setIsLoading(false)
  };

  return (
    <section className={classes.login}>
      <h2 className={classes.title}>Log in</h2>
      {error && <p>{error}</p>}
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="email" className={classes.label}>E-mail</label>
        <input className={classes.input} type="email" ref={emailRef}/>
        <label htmlFor="password" className={classes.label}>Password</label>
        <input className={classes.input} type="password" ref={passwordRef} />
        <div className={classes.createAcc}>
        <button disabled={isLoading} className={classes.createAccBtn}>Log in</button>
        </div>
      </form>
      <p className={classes.signup}>Don't have an account? </p>
      <a href="/signup"><p className={classes.signup} id={classes.getStarted}>Let's get started</p></a>
    </section>
  );
}

export default Login;
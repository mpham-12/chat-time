import classes from './Login.module.css'
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { firestore, auth } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, setDoc, doc } from "firebase/firestore";

const Signup = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const usersDb= collection(firestore, "users");
  const [users] = useCollectionData(usersDb);

  const userRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
console.log('users', users)
    const findExistingUserName = users.find(user => user.username === userRef.current.value)

    if (passRef.current.value !== confirmPassRef.current.value) {
      return setError('Passwords do not match.')
    }
    if (passRef.current.value.length < 6) {
      return setError('Password must be 6 or more characters.')
    }
    if (!emailRef.current.value.includes('@')) {
      return setError('Email must contain an "@" symbol.')
    }
    if (findExistingUserName) {
      return setError('Sorry, that username already exists.')
    }


    try {
      setError('')
      setLoading(true);
      await signup(emailRef.current.value, passRef.current.value);
      await setDoc(doc(usersDb), {
        username: userRef.current.value
      });
      navigate('/login');
    } catch (e) {
      console.log(e)
      setError('Failed to create an account');
    }
    setLoading(false)
    userRef.current.value = ''
    emailRef.current.value = ''
    passRef.current.value = ''
    confirmPassRef.current.value = ''
  }

  return (
    <section className={classes.login}>
      <h2 className={classes.title} id={classes.title}>Let's Get Started</h2>
      {error && <p className={classes.error}>{error}</p>}
      <form className={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="username" className={classes.label}>Username</label>
        <input className={classes.input} type="text" ref={userRef} required />

        <label htmlFor="email" className={classes.label}>E-mail</label>
        <input className={classes.input} type="text" ref={emailRef} required />

        <label htmlFor="password" className={classes.label}>Password</label>
        <input className={classes.input} type="password" ref={passRef} required />

        <label htmlFor="confirmPassword" className={classes.label}>Confirm Password</label>
        <input className={classes.input} type="password" ref={confirmPassRef} required />

        <div className={classes.createAcc}>
          <button disabled={loading} className={classes.createAccBtn}>Create Account</button>
        </div>
      </form>

    </section>
  );
}

export default Signup;
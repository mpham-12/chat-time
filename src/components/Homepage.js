import classes from './Homepage.module.css'
import chat from '../images/chat-light.png'

const Homepage = () => {
  return (
    <section className={classes.homepage}>
      <div className={classes.header}>
        <h2 className={classes.title}>It's never too late.</h2>
        <p className={classes.description}>We're here for you. Talk with a licensed, professional therapist online for free.
        <img className={classes.chatBubble} src={chat} alt="" /></p>
        <a href="/signup" className={classes.getStarted}>Get Started</a>
      </div>
    </section>
  );
}

export default Homepage;
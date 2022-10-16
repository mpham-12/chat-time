import classes from './Homepage.module.css'
import chat from '../images/chat-light.png'

const Homepage = () => {
  return (
    <section className={classes.homepage}>
      <div className={classes.header}>
        <h2 className={classes.title}>It's Chat Time! </h2>
        <p className={classes.description}>Send and recieve messages in real time
        <img className={classes.chatBubble} src={chat} alt="" /></p>
        <a href="/signup" className={classes.getStarted}>Get Started</a>
      </div>
    </section>
  );
}

export default Homepage;
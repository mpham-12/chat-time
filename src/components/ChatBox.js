import classes from './ChatBox.module.css'
import send from '../images/send.png'

const ChatBox = () => {
  return (
    <div className={classes.chatbox}>
        <div className={classes.chatDisplay}>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
          <p>ssfsd</p>
        </div>
        {/* <div className={classes.textbox}> */}
          <form className={classes.textbox}>
            <textarea type="text" className={classes.input}/>
            <button className={classes.sendBtn}><img className={classes.sendIcon} src={send} alt="" /></button>
          </form>
        {/* </div> */}
    </div>
  );
}

export default ChatBox;
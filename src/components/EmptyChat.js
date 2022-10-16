import classes from './EmptyChat.module.css'

const EmptyChat = () => {
  return ( 
    <div className={classes.emptyMsg}>
      <p className={classes.msg}>Select a User to Start Chatting!</p>
    </div>
   );
}
 
export default EmptyChat;
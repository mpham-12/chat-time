import { useAuth } from '../context/AuthContext';
import classes from './ChatMessage.module.css';


const ChatMessage = (props) => {
  const { currentUser } = useAuth();
  const messageClass = props.message.uid === currentUser.uid ? 'sent' : 'recieved';
  const messageBoxClass = props.message.uid === currentUser.uid ? 'sentBox' : 'recievedBox';
  
  return (
    <div className={classes[`${messageBoxClass}`]}>
      <p className={classes[`${messageClass}`]}>{props.message.text}</p>
    </div>
  );
}

export default ChatMessage;
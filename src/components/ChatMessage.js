import { useAuth } from '../context/AuthContext';
import classes from './ChatMessage.module.css';


const ChatMessage = (props) => {
  const { currentUser } = useAuth();
  const messageClass = props.message.uid === currentUser.uid ? 'sent' : 'recieved';
  return (
    <div className={classes[`${messageClass}`]}>
    <p>{props.message.text}</p>
    </div>
  );
}

export default ChatMessage;
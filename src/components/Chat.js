import { updateCurrentUser } from 'firebase/auth';
import { useAuth } from '../context/AuthContext';
import UsersList from './UsersList'
import ChatBox from './ChatBox'
import classes from './Chat.module.css'

const Chat = () => {
  const { currentUser } = useAuth();
  console.log(currentUser)
  return (
    <section className={classes.chat}>
      <div className={classes.chatbox}>
      <UsersList/>
      <ChatBox/>
      </div>

      {!currentUser && <p>you must be logged in to use better health</p>}
      {currentUser && <p>hey, {currentUser.email}</p>}

    </section>
  );
}

export default Chat;
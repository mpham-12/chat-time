import classes from './ChatBox.module.css'
import { auth, firestore } from '../firebase';
import { useAuth } from '../context/AuthContext';
import send from '../images/send.png'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, orderBy, limit, query, setDoc, doc, serverTimestamp, where } from "firebase/firestore";
import ChatMessage from './ChatMessage';
import { useRef } from 'react';
import { FirebaseError } from 'firebase/app';


const ChatBox = (props) => {

  const messagesRef = collection(firestore, "messages");
  const messagesQuery = query(messagesRef, orderBy("createdAt", "asc"), limit(100));
  const [messages] = useCollectionData(messagesQuery, { idField: 'id' });

  const inputRef = useRef();
  const { currentUser } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    const createdAt = new Date().toLocaleString('en-US', { hour: "2-digit", minute: "2-digit" });
    const msgId = Math.floor(Math.random() * 10)


    await setDoc(doc(messagesRef), {
      text: inputRef.current.value,
      createdAt,
      uid: currentUser.uid,
      msgId,
    })


    inputRef.current.value = '';
  }

  return (
    <div className={classes.chatbox}>
      <div className={classes.chatDisplay}>
        {messages && messages.map((message) => {
          console.log('MSG', message.uid)
          return <ChatMessage key={message.msgId} message={message} />
        })}
      </div>
      {/* <div className={classes.textbox}> */}
      <form className={classes.textbox} onSubmit={submitHandler}>
        <textarea type="text" className={classes.input} ref={inputRef} />
        <button className={classes.sendBtn}><img className={classes.sendIcon} src={send} alt="" /></button>
      </form>
      {/* </div> */}
    </div>
  );
}

export default ChatBox;
import classes from './ChatBox.module.css'
import { auth, firestore } from '../firebase';
import { useAuth } from '../context/AuthContext';
import send from '../images/send.png'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, orderBy, limit, query, setDoc, doc, serverTimestamp, where } from "firebase/firestore";
import ChatMessage from './ChatMessage';
import { useRef, useEffect, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { v4 as uuidv4 } from 'uuid';


const ChatBox = (props) => {
  const [selectedUser, setSelectedUser] = useState();

  const messagesRef = collection(firestore, "messages");
  const messagesQuery = query(messagesRef, where("chatroomId", "==", props.chatroomId), orderBy("createdAt", "asc"), limit(100));
  const [messages] = useCollectionData(messagesQuery, { idField: 'id' });

  const inputRef = useRef();
  const bottomRef = useRef();
  const { currentUser } = useAuth();


  const submitHandler = async (e) => {
    e.preventDefault();
    // const createdAt = new Date().toLocaleString('en-US', { hour: "2-digit", minute: "2-digit" });
    const msgId = uuidv4();


    await setDoc(doc(messagesRef), {
      text: inputRef.current.value,
      createdAt: serverTimestamp(),
      uid: currentUser.uid,
      msgId,
      chatroomId: props.chatroomId
    })


    inputRef.current.value = '';
    bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={classes.chatbox}>
      <div className={classes.chatDisplay}>
        {messages && messages.map((message) => {
          return <ChatMessage 
          key={message.msgId} 
          message={message} />
        })}
        <div className='bottomOfChat' ref={bottomRef}></div>
      </div>
      {/* <div className={classes.textbox}> */}
      <form className={classes.textbox} onSubmit={submitHandler}>
        <textarea type="text" className={classes.input} ref={inputRef} placeholder="Type your message..." />
        <button className={classes.sendBtn}><img className={classes.sendIcon} src={send} alt="" /></button>
      </form>
      {/* </div> */}
    </div>
  );
}

export default ChatBox;
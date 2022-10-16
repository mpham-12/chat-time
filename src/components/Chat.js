import { useAuth } from '../context/AuthContext';
import UsersList from './UsersList'
import ChatBox from './ChatBox'
import EmptyChat from './EmptyChat'
import classes from './Chat.module.css'
import { v4 as uuidv4 } from 'uuid';

import { auth, firestore } from '../firebase';
import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, orderBy, limit, query, setDoc, doc, serverTimestamp, getDocs } from "firebase/firestore";


const Chat = () => {
  const [chatroomId, setChatroomId] = useState('');
  const chatroomDb = collection(firestore, "chatroom");
  const [chatrooms] = useCollectionData(chatroomDb);

  const { currentUser } = useAuth();

  const selectUserHandler = async (user1, user2) => {
    let chatroomExists = false;
    const newChatroomId = uuidv4();

    chatrooms.forEach(chatroom => {
      if (chatroom.user1 === user1 && chatroom.user2 === user2) {
        setChatroomId(chatroom.chatroomId)
        return chatroomExists = true
      }
      if (chatroom.user1 === user2 && chatroom.user2 === user1) {
        setChatroomId(chatroom.chatroomId)
        return chatroomExists = true
      }
    });

    if (chatroomExists) return

    if (!chatroomExists) {
    await setDoc(doc(chatroomDb), {
        chatroomId: newChatroomId,
        user1: user1,
        user2: user2,
      });
      return setChatroomId(newChatroomId)
      console.log('GOT USERS')
    }
  }

  return (
    <section className={classes.chat}>
      {!currentUser ? <p className={classes.errorMsg}>You must be logged in to use Chat Time.</p> : <div className={classes.chatbox}>
        <UsersList onSelectUser={selectUserHandler} />
        {chatroomId ? <ChatBox chatroomId={chatroomId}/> : <EmptyChat/>}
      </div>}


    </section>
  );
}

export default Chat;
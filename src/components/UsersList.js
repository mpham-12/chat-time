import classes from './UsersList.module.css'
import { auth, firestore } from '../firebase';
import { collection, orderBy, limit, query, setDoc, doc } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';



const UsersList = () => {
  const [search, setSearch] = useState('')
  const usersRef = collection(firestore, "users");
  const [users] = useCollectionData(usersRef, { idField: 'id' });
  const { currentUser } = useAuth();

  const searchHandler = (e) => {
    setSearch(e.target.value)
  }


  return (
    <div className={classes.list}>
      <div className={classes.usersHeader}>
        <p className={classes.liveChat}>Live Chat</p>
        <h2 className={classes.displayName}>{currentUser.displayName}</h2>
      </div>
      <form>
        <div className={classes.search}>
          <input
            placeholder="Search..."
            onChange={searchHandler} />
        </div>
      </form>
      <div className={classes.users}>

        {users && !search && users.map(user => <div key={user.username} className={classes.user}>{user.username}</div>)}
        {users && search && users.filter((user) => {
          if (user.username.toLowerCase().includes(search.toLowerCase())) {
            return user
          }
        }).map((user) => {
          return <div key={user.username} className={classes.user}>{user.username}</div>
        })}


      </div>
    </div>
  );
}

export default UsersList;
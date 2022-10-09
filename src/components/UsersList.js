import classes from './UsersList.module.css'
import { firestore } from '../firebase';
import { collection} from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';



const UsersList = (props) => {
  const [search, setSearch] = useState('')
  const usersRef = collection(firestore, "users");
  const [users] = useCollectionData(usersRef, { idField: 'id' });
  const { currentUser } = useAuth();

  const searchHandler = (e) => {
    setSearch(e.target.value)
  }

console.log(currentUser)

  return (
  
    <div className={classes.list}>
      <div className={classes.usersHeader}>
        <p className={classes.liveChat}>Live Chat</p>
        <h2 className={classes.displayName}>{currentUser.displayName}</h2>
      </div>
      <form className={classes.form}>
        <div className={classes.search}>
          <input className={classes.searchInput} placeholder="Search" onChange={searchHandler} />
        </div>
      </form>
      <div className={classes.users}>

        {users && users.filter((user) => {
          if(!search) {
            return user
          }
          if (user.username.toLowerCase().includes(search.toLowerCase())) {
            return user
          }
        }).map((user) => {
          return <div 
          key={user.username} 
          tabIndex="0" 
          className={classes.user}
          onClick={() => {props.onSelectUser(currentUser.displayName, user.username)}}
          >{user.username}</div>
        })}


      </div>
    </div>
  );
}

export default UsersList;
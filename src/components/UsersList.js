import classes from './UsersList.module.css'
import { firestore } from '../firebase';
import { collection } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const UsersList = (props) => {
  const [search, setSearch] = useState('');
  const usersRef = collection(firestore, "users");
  const [users] = useCollectionData(usersRef, { idField: 'id' });
  const { currentUser } = useAuth();

  const searchHandler = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className={classes.list}>
      <div className={classes.usersHeader}>
        <p className={classes.liveChat}>Users</p>
      </div>
      <form className={classes.form}>
        <div className={classes.search}>
          <input className={classes.searchInput} placeholder="Search" onChange={searchHandler} />
        </div>
      </form>
      <div className={classes.users}>

        {currentUser && users && users.filter((user) => {
          if (!search) {
            return user
          }
          if (user.username.toLowerCase().includes(search.toLowerCase())) {
            return user
          }
        }).map((user) => {
          if (user.username === currentUser.displayName) {
            return null
          }
          return <div
            key={user.username}
            tabIndex="0"
            className={classes.user}
            onClick={() => { props.onSelectUser(currentUser.displayName, user.username) }}
          >{user.username.charAt(0).toUpperCase() + user.username.slice(1)}</div>
        })}

      </div>
    </div>
  );
}

export default UsersList;
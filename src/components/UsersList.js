import classes from './UsersList.module.css'
import { auth, firestore } from '../firebase';
import { collection, orderBy, limit, query, setDoc, doc} from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';


const UsersList = () => {

  const usersRef = collection(firestore, "users");
  const [users] = useCollectionData(usersRef, { idField: 'id' });

  return ( 
    <div className={classes.list}>
      <h2>USERS LIST</h2>
{users && users.map(user=> <div className={classes.users}>{user.username}</div>)}
    </div>
   );
}
 
export default UsersList;
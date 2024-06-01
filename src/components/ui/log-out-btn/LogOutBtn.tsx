import { FC } from 'react'
import styles from './LogOutBtn.module.sass'
import { getAuth, signOut } from "firebase/auth";
import { removeUser } from "../../../redux/slices/UserSlice";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const LogOutBtn: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const auth = getAuth();

  const handleButtonClick = () => { 
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(
        removeUser()
      );
    }).catch((error) => {
      console.log(error)
    });
    navigate( '/' )
   }

  return (
    <button onClick={handleButtonClick} className={styles["log-out-btn"]}>Sign out</button>
  )
}

export default LogOutBtn
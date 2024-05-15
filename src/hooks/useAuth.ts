import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/UserSlice";

const useAuth = () => {
  const {email, token, uid} = useSelector(selectUser);

  return {
    isAuth: !email,
    email,
    token,
    uid
  }
}

export default useAuth
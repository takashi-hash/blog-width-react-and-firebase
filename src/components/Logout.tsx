import { signOut } from "firebase/auth";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { atuh } from "../firebase";

type LogOutProps = {
  setIsAuth: React.Dispatch<React.SetStateAction<string | boolean>>;
}

const Logout: FC<LogOutProps> = ({ setIsAuth }) => {
  const navigate = useNavigate();
  
  const logout = () => {
    signOut(atuh).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })

  }
  return (
    <div>
      <h1>ログアウトする</h1>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout;
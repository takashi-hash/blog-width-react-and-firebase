import { signInWithPopup } from "firebase/auth";
import { FC } from "react";
import { atuh, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

type LonginPageProps = {
  setIsAuth: React.Dispatch<React.SetStateAction<string | boolean>>;
};

const Login: FC<LonginPageProps> = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const loginWidthGoogle = () => {
    signInWithPopup(atuh, provider).then((result) => {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div>
      <h1>ログインしてはじめる</h1>
      <button onClick={loginWidthGoogle}>Googlgeでログイン</button>
    </div>
  );
};

export default Login;

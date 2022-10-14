import { FC } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

type NavbarProps = {
  isAuth: string | boolean;
};

const Navbar: FC<NavbarProps> = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        Home
      </Link>
      {isAuth ? (
        <>
          <Link to="/createPost">
            <FontAwesomeIcon icon={faFilePen} />
            記事投稿
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faArrowCircleLeft} />
            ログアウト
          </Link>
        </>
      ) : (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowCircleRight} />
          ログイン
        </Link>
      )}
    </nav>
  );
};

export default Navbar;

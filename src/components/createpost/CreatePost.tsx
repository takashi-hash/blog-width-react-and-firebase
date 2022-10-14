import { addDoc, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { atuh, db } from "../../firebase";
import "./CreatePost.css";

type CreatePostProps = {
  isAuth: string | boolean;
};

const CreatePost: FC<CreatePostProps> = ({ isAuth }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [post, setPostText] = useState<string>("");

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  const createPost: () => Promise<void> = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postText: post,
      author: {
        username: atuh.currentUser?.displayName,
        id: atuh.currentUser?.uid,
      },
    });
    navigate("/");
  };

  return (
    <div className="createPostPage">
      <div className="createPostContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="タイトルを入力"
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            onChange={(e) => setPostText(e.target.value)}
            placeholder="本文を入力"
          />
        </div>
        <button onClick={createPost} className="postButton">
          投稿する
        </button>
      </div>
    </div>
  );
};

export default CreatePost;

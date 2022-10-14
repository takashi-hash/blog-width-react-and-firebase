import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import { atuh, db } from "../../firebase";
import "./Home.css";

type postDataType = {
  id: string;
  title: string;
  postText: string;
  author: {
    username: string;
    id: string;
  };
};

const Home: FC = () => {
  const [postLists, setPostLists] = useState<Array<postDataType>>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      const postDatas: postDataType[] = [];

      data.docs.forEach((doc) => {
        const post: postDataType = {
          id: doc.id,
          title: doc.data().title,
          postText: doc.data().postText,
          author: {
            username: doc.data().author.username,
            id: doc.data().author.id,
          },
        };
        postDatas.push(post);
      });

      setPostLists(postDatas);
    };

    getPosts();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div key={post.id} className="postContents">
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <div className="nameAndDeleteButton">
              <h3>{post.author.username}</h3>
              {post.author.id === atuh.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

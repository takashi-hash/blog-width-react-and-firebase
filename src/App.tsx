import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import CreatePost from "./components/createpost/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/navbar/Navbar";

function App() {
  const isAuthed = localStorage.getItem("isAuth") || false;
  const [isAuth, setIsAuth] = useState<string | boolean>(isAuthed);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createPost" element={<CreatePost isAuth={isAuth} />}></Route>
          <Route
            path="/login"
            element={<Login setIsAuth={setIsAuth} />}
          ></Route>
          <Route
            path="/logout"
            element={<Logout setIsAuth={setIsAuth} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

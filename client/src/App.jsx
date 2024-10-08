import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import { useEffect, useState } from "react";


const App = () => {
  const [user , setUser] = useState(null);

  useEffect(() =>{
    const getUser = () =>{
      fetch("http://localhost:5000/auth/login/success",{
        method: "GET",
        credentials:"include",
        headers:{
          Accept:"application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials":true,
        },
      })
      .then((response) => {
        if(response.status === 200) return response.json();
        throw new Error("authentication has been failed")
      })
      .then((resObject) => {
        setUser(resObject.user);
      })
      .catch((err) => {
        console.log(err);
      })
    }
    getUser();
  }, []);

  console.log(user)

  return (
    <>
      <BrowserRouter>
        <Navbar user={user}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;




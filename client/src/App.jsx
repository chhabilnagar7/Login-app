import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
  const user = false;
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




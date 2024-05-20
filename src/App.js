import { Route, Routes, Navigate } from "react-router-dom";
import Login from './components/login/Login';
import SignUp from "./components/login/SignUp";
import ForgotPassword from "./components/login/Forgotpassword";
import Dashboard from './components/pages/Dashbord';
import "./app.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "./ReduxToolkit/Slice/reduxSlice";
import MyProfilePage from "./components/pages/MyProfilePage";

const getRole = () => {
  return localStorage.getItem("role");
};

function App() {
  const role = getRole();

  let dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])

  if (!role || role === "") {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  if (role === "admin") {
    return (
      <div>
        <div className="container" style={{ maxWidth: "1150px", padding: "30px 40px 40px", height: "100vh", marginLeft: "310px" }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<MyProfilePage />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

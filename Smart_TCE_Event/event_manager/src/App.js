import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Account from "./components/Account/Account";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Profile from "./components/Profile/profile";
import { AuthContextProvider } from "./context/AuthContext";
import Admin from "./components/Admin/Admin";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/add" element={<Admin />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

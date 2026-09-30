import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";

import MainLayout from "./components/Layout/MainLayout";
import AuthLayout from "./components/Layout/AuthLayout";

function App() {
  return (
    <Routes>

      {/* Auth layout */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Main layout */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home/>} />
        <Route path="/live" element={<h1>Live Page</h1>} />
        <Route path="/vod" element={<h1>VOD Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
      </Route>

      {/* default redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}

export default App;
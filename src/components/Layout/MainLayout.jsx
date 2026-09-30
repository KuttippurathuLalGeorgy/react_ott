import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";

function MainLayout() {
  return (
    <>
      <NavBar />
      <main className="page-container">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;

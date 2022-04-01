import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

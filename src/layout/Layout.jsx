import Navbar from "./Navbar";
import React from "react";
import { BrowserRouter } from "react-router-dom";

/** The shared layout for all pages of the app */
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main><BrowserRouter></BrowserRouter></main>
    </>
  );
}

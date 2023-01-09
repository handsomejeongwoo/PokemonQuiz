import "./App.css";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import * as P from "./Pages";
import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="App">
        <div className="Bumo">
          <div className="one"></div>
          <div className="two"></div>
        </div>
        <P.MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;

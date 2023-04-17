import React from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ApplicationViews />
      </BrowserRouter>
    </div>
  );
}

export default App;

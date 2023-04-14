import React from "react";
import "./App.css";
import VideoList from "./components/VideoList";
import { SearchForm } from "./components/SearchForm";
import { StateManager } from "./components/StateManager";

function App() {
  return (
    <div className="App">
      <StateManager />
    </div>
  );
}

export default App;

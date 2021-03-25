
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import PersistentDrawerLeft from "./components/Drawer"
import randomizeData from "./utils/randomizeData"

// Create a Context
export const DataContext = React.createContext(randomizeData());
// It returns an object with 2 values:
// { Provider, Consumer }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersistentDrawerLeft/>
      </header>
    </div>
  );
}

export default App;

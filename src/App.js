
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import PersistentDrawerLeft from "./components/Drawer"
import randomizeData from "./utils/randomizeData"

import { DataContextProvider, useDataContext } from './utils/dataContext'

// It returns an object with 2 values:
// { Provider, Consumer }

function App() {
  return (

    <div className="App">
      <DataContextProvider>
        <header className="App-header">
          <PersistentDrawerLeft />
        </header>
      </DataContextProvider>

    </div>

  );
}

export default App;

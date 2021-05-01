
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import PersistentDrawerLeft from "./components/Drawer"
import randomizeData from "./utils/randomizeData"
import TryComponent from './utils/TryComponent';
import { DataContextProvider, useDataContext } from './utils/dataContext'

// Create a Context
export const DataContext = React.createContext(randomizeData());
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

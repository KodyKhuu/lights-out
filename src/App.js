import React from "react";
import Board from "./Board";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <Board nrows={5} ncols={5} chanceLightStartsOn={0.25} />
    </div>
  );
}

export default App;

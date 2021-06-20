import React from "react";
import "./App.css";

import ColorForm from "./task1/ColorForm.jsx";
import InputForm from "./task2/InputForm";

function App() {
  return (
    <React.Fragment>
      <div className="task-1">
        <ColorForm />
      </div>
      <div className="task-2">
      <InputForm />
      </div>
    </React.Fragment>
  );
}

export default App;

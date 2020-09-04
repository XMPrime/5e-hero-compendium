import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [apiResponse, setAPIResponse] = useState();
  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => setAPIResponse(res));
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <p className='App-intro'>{apiResponse}</p>
      </header>
    </div>
  );
}

export default App;

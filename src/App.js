import logo from "./logo.svg";
import "./App.css";
import React from 'react'
import { useEffect } from "react";
import { generateToken } from "./Notification/Firebase";
import { onMessage, getMessaging } from "firebase/messaging";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    const messaging = getMessaging();
    generateToken();
    onMessage(messaging, (payload) => {
      console.log( payload);
      toast(payload.notification.body)
      
    })
  }, []);

  return (
    <div className="App">
    <Toaster position="top-right"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

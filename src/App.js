import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";

const API_KEY = process.env.REACT_APP_CHAT_ENGINE;
const API_PASS = process.env.REACT_APP_CHAT_ENGINE_PASSWORD;

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={API_KEY}
      userName="mauroavellaneda"
      userSecret={API_PASS}
    />
  );
};

export default App;

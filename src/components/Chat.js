import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import SendMessage from "./SendMessage";
import SignOut from "./SignOut";

function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <SignOut />
      {messages.map(({ id, text, photoURL }) => (
        <div key={id}>
          <p> {text} </p>
        </div>
      ))}
      <SendMessage />
    </div>
  );
}

export default Chat;

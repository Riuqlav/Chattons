import React from "react";
import { useState, useEffect } from "react";
import { Input, Button } from "@material-ui/core";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";

function SendMessage() {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser; //destructuring auth.currentUser to get the user's id and photo
    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(), //using firebase.firestore.FieldValue to get the current time and order the messages by time
    }); //user object with id and photoURL
    setMsg(""); //clear the input field
    // scroll.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            placeholder="Message..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)} //every entry key pressed will update the state, probably not the best for performance but it works
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;

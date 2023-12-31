import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import { Button, Input } from "@mui/material";

const SendMessage = ({ scroll }) => {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behaviour: "smooth" });
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <Input
          style={{
            width: "78%",
            fontSize: "15px",
            fontWeight: "550",
            marginLeft: "5px",
            marginBottom: "-3px",
          }}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Messages..."
        />
        <Button
          style={{
            width: "18%",
            fontSize: "15px",
            fontWeight: "550",
            margin: "4px 5% -13px 5%",
            maxWidth: "200px",
       
            backgroundColor: "skyblue",
            marginTop: "10px",
            marginBottom:"10px",
            color:"blue"

          }}
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default SendMessage;

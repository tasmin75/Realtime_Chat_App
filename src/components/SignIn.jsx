import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";
import React from "react";

const SignIn = () => {
  const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          padding: "30px",
          fontSize: "20px",
          borderRadius: "0",
          fontWeight: "600",
        }}
        onClick={SignInWithGoogle}
      >
        Sign In With Google
      </Button>
    </div>
  );
};

export default SignIn;

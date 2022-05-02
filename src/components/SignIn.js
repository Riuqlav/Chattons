import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";
import { Button } from "@material-ui/core";

const SignIn = () => {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

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
          // padding: "30px",
          // fontSize: "20px",
          // borderRadius: "0",
          // fontWeight: "600",

          fontSize: "15px",
          borderRadius: "10",
          fontWeight: "600",
          paddingRight: "30px",
          paddingLeft: "20px",
          backgroundColor: "lightgray",
          border: "none",
          color: "black",
          padding: "16px 32px",
          textAlign: "center",
          opacity: "0.7",
          transition: "0.3s",
        }}
        onClick={signInWithGoogle}
      >
        Sign In With Google
      </Button>
    </div>
  );
};

export default SignIn;

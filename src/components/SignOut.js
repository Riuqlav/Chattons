import React from "react";
import { auth } from "../firebase.js";
import { Button } from "@material-ui/core";

const SignOut = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        position: "fixed",
        width: "100%",
        top: "5",
        bottom: "5",
        left: "5",

        borderRadius: "10",

        zIndex: "10",
      }}
    >
      <Button
        style={{
          fontSize: "15px",
          borderRadius: "10",
          fontWeight: "600",
          padding: "15px",
          backgroundColor: "lightgray",
          color: "black",
          textAlign: "center",
          opacity: "0.7",
          transition: "0.3s",
          marginRight: "15px",
        }}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default SignOut;

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
          // padding: "20px",
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
          margin: "4px 2px",
          opacity: "0.6",
          transition: "0.3s",
        }}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default SignOut;

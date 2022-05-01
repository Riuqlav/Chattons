import React from "react";
import { auth } from "../firebase.js";
import { Button } from "@material-ui/core";
import Header from "./Header.js";

const SignOut = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        position: "fixed",
        width: "100%",
        backgroundColor: "white",
        top: 0,
        borderBottom: "solid 1px lightgray",
        zIndex: "10",
      }}
    >
      <Header />

      <Button
        style={{
          padding: "20px",
          fontSize: "15px",
          borderRadius: "0",
          fontWeight: "600",
          paddingRight: "50px",
          paddingLeft: "50px",
        }}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default SignOut;

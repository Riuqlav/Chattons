import React from "react";
import { auth } from "../firebase.js";
import { Button } from "@material-ui/core";

const SignOut = () => {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  );
};

export default SignOut;

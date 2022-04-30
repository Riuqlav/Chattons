import React from "react";
import { useState, useEffect } from "react";
import { Input, Button } from "@material-ui/core";

function SendMessage() {
  const [msg, setMsg] = useState("");
  return (
    <div>
      <form>
        <Input
          value={msg}
          onChange={(e) => setMsg(e.target.value)} //every key pressed will update the state, probably not the best for performance but it works
          placeholder="Message..."
        />
        <Button>Send</Button>
      </form>
    </div>
  );
}

export default SendMessage;

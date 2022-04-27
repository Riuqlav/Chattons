import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
// Server-side rendering
const projectID: string = "ae58ab19-ecc8-4e20-a30f-215820cf7538";
const username: string = "VAL";
const secret: string = "VAL321";

const App = () => {
  // Initialize the chat engine logic
  const chatProps = useMultiChatLogic(projectID, username, secret);
  return (
    <div>
      <MultiChatSocket {...chatProps} /> // Socket connection to update the
      client side
      <MultiChatWindow {...chatProps} style={{ height: "100vh" }} />
    </div>
  );
};

export default App;

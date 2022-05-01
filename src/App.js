import "./App.css";
import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./components/Header";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Header />
      <div className="card">{user ? <Chat /> : <SignIn />}</div>
    </div>
  );
}

export default App;

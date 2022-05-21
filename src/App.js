import "./App.css";
import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>🐈‍⬛CHATTONS🐈‍⬛</h1>
        {user ? <SignOut /> : null}{" "}
      </header>
      <div className="home">
        <section className="card">{user ? <Chat /> : <SignIn />}</section>
      </div>
    </div>
  );
}

export default App;

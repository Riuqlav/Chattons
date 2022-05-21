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
        {/* if user is logged in, show SignOut button */}
      </header>
      <div className="home">
        <section className="card">{user ? <Chat /> : <SignIn />}</section>
        {/* if user is logged in, show chat otherwise SignIn button */}
      </div>
    </div>
  );
}

export default App;

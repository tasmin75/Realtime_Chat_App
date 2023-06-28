import React from "react";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import SignIn from "./components/Signin";

const App = () => {
  const [user] = useAuthState(auth);

  return <div>{user ? <Chat /> : <SignIn />}</div>;
};

export default App;

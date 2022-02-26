import React, { useState } from "react";
import firebase from "./firebase";

function App() {
  const [token, setToken] = useState("");

  React.useEffect(() => {
    const msg = firebase.messaging();
    msg
      .requestPermission()
      .then(() => {
        return msg.getToken();
      })
      .then((data) => {
        // <h3>{data}</h3>;
        setToken(data);
      });
  });
  return (
    <div className="">
      <h4>
        <h1>Token:</h1> <br /> {token}
      </h4>
    </div>
  );
}

export default App;

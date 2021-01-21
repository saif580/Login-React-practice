import React from "react";
import Login from "./Login";

let isLoggedIn = false;

// function loggedIn() {
//   if (isLoggedIn) {
//     return <h1>hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;

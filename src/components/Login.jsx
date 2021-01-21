import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <Input id="user" type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;

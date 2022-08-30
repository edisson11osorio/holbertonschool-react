import React from "react";

function Login() {
  return (
    <body className="App-body">
      <p>Login to access the full dashboard</p>
      <label>
        Email: <input type="text" name="Email" />
      </label>
      <label>
        Password: <input type="password" name="Password" />
      </label>
      <button>OK</button>
    </body>
  );
}

export { Login };

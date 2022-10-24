import React from "react";
import base64 from "base-64";
import axios from "axios";

 
//create a function that has login form that logs you in with username and password and returns a token

const Login = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [token, setToken] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = base64.encode(`${username}:${password}`);
        const headers = { Authorization: `Bearer ${token}` };
        axios.post("https://swapybackend.herokuapp.com/signin", { headers })
            .then((res) => {
                setToken(res.data.token);
                setError("");
            })
            .catch((err) => {
                setError("Invalid username or password");
                setToken("");
                console.log(err);
            });
    };

    return (
        <div className="App">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
            {token && <p>{token}</p>}
        </div>
    );
};

export default Login;




/* function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    const headers = {
      Authorization: "Bearer c2FsYWg6MTIz" + base64.encode(username + ":" + password),
    };
    axios
      .post("https://swapybackend.herokuapp.com/signin", user, { headers })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
 */


//
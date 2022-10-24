import React from "react";
import base64 from "base-64";
import axios from "axios";
import '../App.css'


 

const Login = () => {
    /* const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState(""); */
    const [error, setError] = React.useState("");
    const [token, setToken] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const headers = { Authorization: "Basic " + base64.encode(username + ":" + password) };
        axios.post("https://swapybackend.herokuapp.com/signin", {},{ headers })
            .then((res) => {
              console.log(res.data);
              setError("");
            })
            .catch((err) => {
                setError("Invalid username or password");
                setToken("");
                console.log(err);
            });
            console.log(username, password);
    };

    return (
        <div className="App">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              
                <input 
                    type="text"
                    placeholder="username"
                    name="username"
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                />
                            <button style={{marginTop: '10px'}} type="submit">Login</button>

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
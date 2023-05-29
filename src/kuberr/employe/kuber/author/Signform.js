import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Signform() {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [error, setError] = useState(null);
const navigate =useNavigate();
  const handleSubmit = (event) => {
    // const token = localStorage.getItem("accessToken");
    console.log(event, "handle data");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    // Check if the user is already registered
    if (registeredUsers.some((user) => user.email === email)) {
      alert("You are already registered!");
      return;
    }

    const values = {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
    };

    // Register the new user
    axios
      .post("http://127.0.0.1:8000/register/", values)
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        console.log(result, "result");
        alert("Registration successful");
        // Redirect to login page
        navigate("/");
      })
      .catch((error) => {
        console.log(error, "error");
        setError(error.response.data);
      });

    // Add the new user to the list of registered users
    const newUser = { email: email };
    setRegisteredUsers([...registeredUsers, newUser]);
  };

  return (
    <div style={{ width: "1500px" }}>
      <form onSubmit={handleSubmit}>
        <div className="register-form ">
          <div className="register w-25">
            <h2 align="center" className="mb-3  regishead">
              Register here
            </h2>

            <div>
              <label>
                <b>Username</b>
              </label>
              <input
                type="text"
                className="form-control col-12"
                name="username"
                placeholder="Fullname"
                required
              />
            </div>

            <div>
              <label>
                <b>Email address</b>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-2">
              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>

            {error && <div className="text-danger mb-2">{error.message}</div>}

            <div className="mt-3">
              <button className="btn btn-info w-100" type="submit">
                <b> Register</b>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

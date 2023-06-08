import { useState } from "react";
import AuthUser from "./AuthUser";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const { http, setToken } = AuthUser();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = () => {
    // api call
    http
      .post("./register", { name: name, email: email, password: password })
      .then((res) => {
        navigate("/login");
      });
  };
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-sm-6">
        <div className="card p-4">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="pwd"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={submitForm}
            className="btn btn-primary mt-4"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

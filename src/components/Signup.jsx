import React, { useState } from "react";
import SocialSignin from "./SocialSignin";
import { Link, useHistory } from "react-router-dom";
import { account, id } from "../services/appwriteConfig";

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUpUser = (e) => {
    e.preventDefault();

    account.create(id, user.email, user.password, user.name).then(
      async (res) => {
        console.log(res);
        account.createEmailSession(user.email, user.password).then((res) => {
          history.push("/home");
        });
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <div>
      <h2 className="mt-5 text-center">Super Auth</h2>
      <h3 className=" text-center">Signup</h3>

      <form className="container">
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="email"
            name="password"
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <div className="mb-3">
          <span>Already have an account ? </span>{" "}
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>

        <button
          onClick={(e) => signUpUser(e)}
          type="submit"
          className="btn btn-success"
        >
          Signup
        </button>
      </form>

      <SocialSignin />
    </div>
  );
};

export default Signup;

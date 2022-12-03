import React from "react";
import { account } from "../services/appwriteConfig";

const SocialSignin = () => {
  const googleAuth = (e) => {
    e.preventDefault();

    account.createOAuth2Session(
      "google",
      "http://localhost:3000/home",
      "http://localhost:3000/login"
    );
  };

  return (
    <div className="container-xl my-3">
      <b>OR:</b>
      <br />

      <button
        onClick={(e) => googleAuth(e)}
        className="btn btn-outline-danger my-1 mx-2 "
      >
        Google
      </button>

      <button className="btn btn-outline-primary my-1">Facebook</button>
    </div>
  );
};

export default SocialSignin;

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { account } from "../services/appwriteConfig";

const Home = () => {
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(async () => {
    account.get().then(
      (res) => {
        setUser(res);
        console.log(res);
      },
      (err) => {
        console.log(err); // Failure
      }
    );
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();

    account.deleteSession("current").then((res) => {
      history.push("/");
    });
  };

  if (user) {
    return (
      <div className="container-xxl border mt-5 p-3">
        <h3 className="text-center"> Super Auth </h3>
        <h6 className="d-flex justify-content-end">Welcome, {user.name} </h6>
        <div className="d-flex justify-content-end align-items-center">
          <button
            className="btn btn-danger mx-1"
            onClick={(e) => handleLogout(e)}
          >
            Logout
          </button>
          <button className="btn btn-primary mx-1">Change Password</button>
        </div>

        <div className="my-3">
          <h6>UID : {user.$id}</h6>
          <h6>Name : {user.name}</h6>
          <h6>Email : {user.email}</h6>
          <h6>
            Email Verified :{" "}
            {user.emailVerification ? "Verified" : "Not-Verified"}
          </h6>

          <h6>
            Registered on :{" "}
            {user.registration ? user.registration.split("T")[0] : ""}
          </h6>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <button className="btn btn-outline-danger">Delete Account</button>
        </div>
      </div>
    );
  } else {
    return <div>Please login</div>;
  }
};

export default Home;

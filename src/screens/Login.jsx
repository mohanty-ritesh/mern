import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  let navigate=useNavigate()
  const handlesubmit = async (e) => {
    e.preventDefault(); //it will prevent the default behavious of a for submit that is refresh the page
    const response = await fetch("http://localhost:3000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid creditals");
    }
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      navigate("/");

    }

  };
  const onchange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
       <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="Email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            // id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            // id="exampleInputPassword1"
            placeholder="Password"
            onChange={onchange}
          />
        </div>
            <button type="submit" className="btn btn-primary">
      Submit
    </button>
    <Link to={"/signup"} className="m-3 btn btn-danger">
      Don't Have a Account?
    </Link>
    </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

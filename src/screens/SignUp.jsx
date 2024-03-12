import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function SignUp() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault(); //it will prevent the default behavious of a for submit that is refresh the page
    const response = await fetch("http://localhost:3000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location
      })
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid creditals");
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
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        className="form-control"
        name="name"
        value={credentials.name}
        placeholder="Enter Your Name"
        onChange={onchange}
      />
    </div>
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
    <div className="mb-3">
      <label htmlFor="exampleInputlocation1">Location</label>
      <input
        type="text"
        className="form-control"
        name="location"
        value={credentials.location}
        // id="exampleInputPassword1"
        placeholder="Password"
        onChange={onchange}
      />
    </div>

    <button type="submit" className="btn btn-primary">
      Submit
    </button>
    <Link to={"/login"} className="m-3 btn btn-danger">
      Already have a account?
    </Link>
  </form>
</div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

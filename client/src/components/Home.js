import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    localStorage.setItem("userpasss", password);
    navigate("/products");
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = {
      username: userName,
      password: password,
    };

    try {
      const response = await fetch("http://localhost",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        console.log("User registered successfully.");
      } else {
        throw new Error("User registration failed.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form className="home__form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div class="content">
          <div class="input-field">
            <input
              type="text"
              placeholder="LOGIN NAME"
              name="username"
              className="home__input"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              minLength={6}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="PASSWORD"
              name="password"
              className="home__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>
        </div>
        <div className="action">
          {/* <button onClick={handleRegister}>Register</button> */}
          <button>Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Home;

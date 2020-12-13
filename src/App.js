import React, { useState } from "react";
import "./styles.css";

const frameworksDictionary = {
  REACT: ["@tanaypratap", "@reactjsofficial"],
  FLUTTER: [
    "@coding_boy",
    "@flutter_app_developers",
    "@theflutterway",
    "@theboringdeveloper"
  ],
  WEBDEVELOPMENT: ["@neogcamp", "@webdevelopment24x7", "@coding.batch"],
  ANDROID: ["@android", "@adpth"],
  KOTLIN: ["@code.fun", "@dscvitpune"],
  PYTHON: ["@python.advance.projects", "@python_scripts"],
  INTERVIEW: ["@geeks_for_geeks", "@computer_science_engineers"]
};

frameworksList = Object.keys(frameworksDictionary);

export default function App() {
  [accounts, setaccounts] = useState("");

  const inputHandler = (event) => {
    var userInput = event.target.value;
    userInput = userInput.toUpperCase();
    var accounts = frameworksDictionary[userInput];
    if (accounts === undefined) {
      accounts = ["we dont have this"];
    }
    setaccounts(accounts);
  };

  const accountsList = [];
  for (var i = 0; i < accounts.length; i++) {
    accountsList.push(accounts[i]);
  }

  const clickHandler = (item) => {
    var accounts = frameworksDictionary[item];
    setaccounts(accounts);
  };

  var newList = Object.keys([accounts]);

  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "blue",
          color: "white"
        }}
      >
        Instagram Pages for Developers
      </h1>
      <input
        style={{
          padding: "0.5rem",
          borderRadius: "1rem",
          fontSize: "1rem",
          placeholder:
            "put your favourite framework and we will suggest some Instagram pages"
        }}
        onChange={inputHandler}
      />
      <section>
        <ul>
          {frameworksList.map((item) => {
            return (
              <a
                className="hover"
                style={{
                  display: "inline-block",
                  margin: "0.5rem",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  border: "2px",
                  borderStyle: "solid",
                  cursor: "pointer"
                }}
                onClick={() => clickHandler(item)}
                key={item}
              >
                {"  "}
                {item}
              </a>
            );
          })}
        </ul>

        <ul
          style={{
            listStyle: "none",
            textAlign: "left"
          }}
        >
          {accountsList.map((item1) => {
            return (
              <li
                style={{
                  display: "inline-block",
                  backgroundColor: "limegreen",
                  padding: "0.4rem",
                  fontSize: "1.2rem",
                  color: "white",
                  margin: "0.5rem",
                  borderRadius: "0.5rem"
                }}
              >
                {item1}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

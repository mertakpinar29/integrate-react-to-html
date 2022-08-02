"use strict";

const loginForm = React.createElement;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return loginForm(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          const user = {
            username: document.querySelector("#username").value,
            password: document.querySelector("#password").value,
          };
          console.log("user trying to login is: ", user);
          /* should have make a request to login route with these creds in a real world application */
        },
      },
      [
        React.createElement(
          "div",
          { className: "input-field" },
          React.createElement("input", {
            type: "username",
            name: "username",
            id: "username",
            placeholder: "Enter your username",
            style: { marginBottom: 10 },
          })
        ),
        React.createElement(
          "div",
          { className: "input-field", style: { marginBottom: 10 } },
          React.createElement("input", {
            type: "password",
            name: "password",
            id: "password",
            placeholder: "Enter your password",
          })
        ),
        React.createElement("button", { type: "submit" }, "Submit"),
      ]
    );
  }
}

const domContainer = document.querySelector("#react-component");
const root = ReactDOM.createRoot(domContainer);
root.render(loginForm(LoginForm));

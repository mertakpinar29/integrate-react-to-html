// createElement method of React creates a React component
const loginForm = React.createElement;

// Creating a class Component by extending React.component class
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  // render method takes what will be rendered by LoginForm class component.
  render() {
    return loginForm(
      // createElement() method takes element name as the first parameter.
      "form",
      // createElement() method takes props for that element as the second parameter.
      {
        // Declaring onSubmit event handler to define what is going to happen when form is submitted.
        onSubmit: (e) => {
          /* preventDefault() method prevents the default action of form submission which 
             refreshes the page.
          */
          e.preventDefault();
          /* Getting values from input fields and console logging them */
          const user = {
            username: document.querySelector("#username").value,
            password: document.querySelector("#password").value,
          };
          console.log("user trying to login is: ", user);
          /* should have make a request to login route with these creds in a real world application */
        },
      },
      // createElement() method takes child elements as the third parameter.
      [
        // First child is HTML div element that has input element inside of it.
        React.createElement(
          // element name
          "div",
          // props
          { className: "input-field" },
          // child element
          React.createElement("input", {
            type: "username",
            name: "username",
            id: "username",
            placeholder: "Enter your username",
            style: { marginBottom: 10 },
          })
        ),
        // password input element as 2nd child of form element
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
        // a button to submit the form as 3rd child element of the form.
        React.createElement("button", { type: "submit" }, "Submit"),
      ]
    );
  }
}

// grabbing an element from index.html that has "react-component" as its id.
const domContainer = document.querySelector("#react-component");
// root is where our components will be rendered
const root = ReactDOM.createRoot(domContainer);
// render LoginForm component in a div that has "react-component" as its id
root.render(loginForm(LoginForm));

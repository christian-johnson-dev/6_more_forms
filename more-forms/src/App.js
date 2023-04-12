import "./App.css";
import { useState } from "react";

function App() {
  //?---------- STATE VALUES ----------//
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password1, setPassword1] = useState("");
  const [password1Error, setPassword1Error] = useState("");

  const [password2, setPassword2] = useState("");
  const [password2Error, setPassword2Error] = useState("");

  //?---------- EVENT HANDLERS ----------//

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
    if (event.target.value.length < 1) {
      setFirstNameError(<div className="warning">First Name is required</div>);
    } else if (event.target.value.length < 2) {
      setFirstNameError(<div className="warning">Must be 2+ characters</div>);
    } else {
      setFirstNameError(<div className="success">First name looks great.</div>);
    }
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
    if (event.target.value.length < 1) {
      setLastNameError(<div className="warning">Last Name is required</div>);
    } else if (event.target.value.length < 2) {
      setLastNameError(<div className="warning">Must be 2+ characters</div>);
    } else {
      setLastNameError(<div className="success">Last name looks great.</div>);
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value.length < 1) {
      setEmailError(<div className="warning">Email is required</div>);
    } else if (event.target.value.length < 6) {
      setEmailError(<div className="warning">Must be 5+ characters</div>);
    } else {
      setEmailError(<div className="success">Valid email!</div>);
    }
  };

  const handlePassword1 = (event) => {
    setPassword1(event.target.value);
    if (event.target.value.length < 1) {
      setPassword1Error(<div className="warning">Password is required</div>);
    } else if (event.target.value.length < 6) {
      setPassword1Error(<div className="warning">Must be 6+ characters</div>);
    } else {
      setPassword1Error(<div className="success">Password is valid!</div>);
    }
  };

  const handlePassword2 = (event) => {
    setPassword2(event.target.value);
    if (event.target.value !== password1) {
      setPassword2Error(<div className="warning">Passwords do not match</div>);
    } else {
      setPassword2Error(<div className="success">Passwords match!</div>);
    }
  };

  //?---------- HELPER FUNCTION ----------//
  const generateListItem = (label, value) => {
    if (value.length > 0) {
      return (
        <li>
          {label}: {value}
        </li>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <form action="">
          <div className="inputField">
            <label htmlFor="">First name</label>
            <input
              id="firstName"
              type="text"
              onChange={handleFirstName}
              value={firstName}
            />
          </div>
          <div className="feedback">{firstNameError}</div>
          <div className="inputField">
            <label htmlFor="">Last Name</label>
            <input
              id="lastName"
              type="text"
              onChange={handleLastName}
              value={lastName}
            />
          </div>
          <div className="feedback">{lastNameError}</div>
          <div className="inputField">
            <label htmlFor="">Email</label>
            <input
              id="email"
              type="email"
              onChange={handleEmail}
              value={email}
            />
          </div>
          <div className="feedback">{emailError}</div>
          <div className="inputField">
            <label htmlFor="">Password</label>
            <input
              id="password1"
              type="password"
              onChange={handlePassword1}
              value={password1}
            />
          </div>
          <div className="feedback">{password1Error}</div>
          <div className="inputField">
            <label htmlFor="">Confirm Password</label>
            <input
              id="password2"
              type="password"
              onChange={handlePassword2}
              value={password2}
            />
          </div>
          <div className="feedback">{password2Error}</div>
        </form>
        <div className="output">
          <h2>Your form data</h2>
          <ul>
            {generateListItem("First Name", firstName)}
            {generateListItem("Last Name", lastName)}
            {generateListItem("Email", email)}
            {generateListItem("Password", password1)}
            {generateListItem("Confirm Password", password2)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

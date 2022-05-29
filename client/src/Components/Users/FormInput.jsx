import Card from "../UI/Card";
import React, { useState } from "react";
import classes from "./FormInput.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function FormInput(props) {
  const { onChange, onBlur, errorMessage, id, ...inputprops } = props;
  const [error, setError] = useState();
  const [focused, setOnFocused] = useState(false);

  // if (
  //   enteredUsername.trim().length === 0 ||
  //   enteredAge.trim().length === 0 ||
  //   +enteredAge < 1
  // ) {
  //   setError({
  //     title: "Invalid input",
  //     message: "please enter something valid",
  //   });
  // return;
  // }
  // props.OnAddUser(enteredUsername, enteredAge);

  function errorHandler() {
    setError(null);
  }

  function focusHandler(event) {
    setOnFocused(true);
  }

  return (
    <div>
      <input
        {...inputprops}
        onChange={onChange}
        onBlur={focusHandler}
        focused={focused.toString()}
      ></input>
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;

import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItems.css";

const ExpenseItem = (props) => {
  /*useState is a special function also called a hook to change the state of some variable in React.
  It receives a variable which is going to be the inital state and a function to chang that state.
  */
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

/**
 * NOTES:
 * "PROPS" stands for properties in React.
 * These properties are like parameters are to functions.
 * These props or properties behave like an object an not as a single paramater.
 *
 * ------------------------------------------------------------
 *
 * STATE IN REACT
 *
 * Remember that a React component is a FUNCTION.
 * In programing when you call a function it is exectuted once  only.
 * In React a function or component can be executed more than once. That is when the STATE concept is introduced.
 * This concept tells React to execute a function a second time so that some data inside the function or component can change.
 *
 */

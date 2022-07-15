import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import NewExpenses from "../NewExpenses/NewExpenses";
import "./Expenses.css";

const Expenses = () => {
  const expenses = [
    { id: "e1", title: "Toilet Paper", amount: 24.67, date: new Date() },
    { id: "e2", title: "Car Insurance", amount: 294.67, date: new Date() },
    { id: "e3", title: "New TV", amount: 694.67, date: new Date() },
    { id: "e4", title: "Baby Diappers", amount: 54.67, date: new Date() },
  ];
  return (
    <Card className="App">
      <h2>Let's get started!</h2>
      <NewExpenses />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />{" "}
    </Card>
  );
};

export default Expenses;

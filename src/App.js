import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";
import "./index.css";
import "./App.css";

let DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94,
    date: new Date(2019, 8, 20)
  },
  { id: "e2", title: "New TV", amount: 799, date: new Date(2020, 3, 28) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294,
    date: new Date(2021, 5, 15)
  },
  { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date() }
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses]
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;

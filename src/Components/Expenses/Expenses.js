import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses = {filteredExpenses} />
      <ExpensesList items = {filteredExpenses}/>
    </Card>
  );
};
export default Expenses;

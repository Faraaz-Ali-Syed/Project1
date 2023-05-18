import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      name: "NIKE sports",
      amount: 94.12,
      size: "S",
    },
    { id: "e2", name: "ADIDAS PRO", amount: 799.49, size: "XL" },
    {
      id: "e3",
      name: "B1 FORMALS",
      amount: 294.67,
      size: "M",
    },
    {
      id: "e4",
      name: "TIGER PAW SHOE",
      amount: 450,
      size: "L"
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

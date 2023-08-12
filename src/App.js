import React, { useState } from "react";
import NewExpense from "../src/components/NewExpense/NewExpense";
import Expense from "../src/components/Expenses/Expenses";

//초기 데이터 입력값 - 연습용
const Initial_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 10.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Initial_expenses);

  const addExpenseHandler = (expense) => {
    console.log(setExpenses);
    //  setExpenses([expenses, ...expenses]) : 이 상태는 이전의 내용이 보이지 않음
    setExpenses((prevExpenses) => {
      console.log(expense);
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;

// return()안의 items는 Expense.js에서 가져온것, expenses는 위의 App에서 가져옴 - App.js와 Expense.js연결

/* 자식인 NewExpense와 연결
7.
기록한 지출을 저장할 함수 생성
 const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
8.
처음 NewExpense.js에서 했던 것과 같이 함수를 실행하지 않고 포인터로 함수 전체를 넘겨주기만 함
<NewExpense onAddExpense={addExpenseHandler} />

9. NewExpense로 넘어감


*/

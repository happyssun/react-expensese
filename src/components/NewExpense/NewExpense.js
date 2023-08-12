import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseFormDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseFormData={saveExpenseFormDataHandler} />
    </div>
  );
};
export default NewExpense;

/* 다른 컴포넌트 사이 연결, 자식에서 부모 컴포넌트로 소통하는 방법 (자식에서 부모로 위로는 연결이 안댐 그래서 부모컴포넌트에서 먼저)

자식 컴포넌트인 ExpenseForm과 연결 

1.*아주아주 중요!!!!
<ExpenseForm onSaveExpenseFormData={saveExpenseFormDataHandler} />
-onSaveExpenseFormData는 포인터가 전달될 함수 : 이름은 임의 정의. 시작에 on을 넣어 알기쉽게

saveExpenseFormDataHandler함수를 ()를 끝에 안넣어서 함수를 실행하지는 않고 함수를 가리키기만 함
그래서 함수 자체가 여기에서 실행되지 않고 함수자체가 ExpenseForm으로 전달이 됨 -포인터를 전달


2. ExpenseForm.js로 넘어감 

11. 
App.js에서 넘어옴

12.
5번째줄 const NewExpense = () - 가로안에 props

13.
App.js에서 넘어온 함수 onAddExpense를 호출
props.onAddExpense(expenseData);




*/

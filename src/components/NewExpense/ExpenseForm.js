import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //state는 각각 개별로 독립 - 한개의 컴포넌트에 여러개의 state 가능
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* 한번에 적용하는 방법
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enterdAmount: "",
    enteredDate: "",
  });
*/

  //onChange 이벤트가 발생할때 타겟의 값을 가져온다 - 입력하는 값을 가져오는 것
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // state를 하나씩 적용할때

    /* 다수의 state를 한번에 적용할때 
    object로 여러 state 가져올때 주의점:
    merge가 되지 않기때문에 업데이트시에 다른키들이 사라지게 된다
    그렇기에 위의 모든 데이터 즉 enterdAmount: "", enteredDate: ""도 가져와야함
    그래서 ...userInput을 사용 - 스프레드 연산자 : 기존 배열 또는 객체의 전체나 일부를 다른 배열이나 객체에 복사 */
    /* 수동으로 복사 - 기본값을 복사한 후 오버라이드 : 리액트가 상태 업데이트를 바로 실행 않함
    따라서 동시에 많은 상태를 업데이트 할 경우 최신값을 잘못가져올수 있음
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    }); 

    이런 경우엔 꼭 스냅샷을 이용 
    - setUserInput 함수를 호출해서 다시 함수를 전달해야함 : 리액트에 의해 자동으로 실행 - 최신업데이트
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });*/
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    /* 한번에 적용하는 방법
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
    */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /* 한번에 적용하는 방법
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
    */
  };

  const submitHandler = (event) => {
    event.preventDefault(); // 초기화 방지 : 폼은 submit를 통해 제출될때마다 새로고침되어 리로드 되는데 이것 방지

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);

    props.onSaveExpenseFormData(expenseData);
    // 값에 ''빈 문자열을 넣어서 입력내용 삭제
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // 밸류값을 넣어서 리로드 될때 양방향 바인딩이 가능 - 이경우 위의 setEnteredTitle('') 빈 문자열 반환
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

/* 입력한 정보가 최상위인 app.js까지 가기위해선 먼저 부모 컴포넌트인 NewExpense와 연결

3. props를 사용해서 부모컴포넌트로부터 함수를 받음
4번째 줄 const ExpenseForm = (props) => {   - 매개변수에 props

4.
73번째 줄 props.onSaveExpenseFormData(); 
- onSaveExpenseFormData()는 NewExpense.js에서 함수 이름을 정한것

5.
props.onSaveExpenseFormData(expenseData);
()안에 NewExpense.js 안에 있는 NewExpense함수의 const expenseData = {}값을 인자(argument)로 가져올수 있음

6. App.js로 이동
*/

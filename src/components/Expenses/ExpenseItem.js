import React, { useState } from "react";
// useState는 리액트 라이브러리 제공함수(리액트 훅)
// 리액트는 한번 실행되고 나면 끝인데 useState를 사용해서 그 부분을 다시 불러올수 있다 - evaluated
// 여기에서는 버튼을 클릭했을때 title이름이 변경되게 하기위해 사용

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // state는 배열을 반환 - 꼭 import해야햠
  // title은 관리되고있는 값-props.title  setTitle은 title값을 업데이트하는 함수
  // 처음 렌더링될 때 useState(props.title)는 미리 설정한 title의 초기값
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  // onClick 이벤트를 발생시켰을때 setTitle로 인해 새로운 title값을 재할당해서 이 컴포넌트를 다시 불러옴
  const clickHandler = () => {
    setTitle("Updated!");
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
}
export default ExpenseItem;

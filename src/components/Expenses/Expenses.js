import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expense(props) {
  const [filteredYear, setFilterdedYear] = useState("2021");

  //ExpensesFilter에서 만든 셀렉트박스의 연도를 변경시 그 값을 받아 Expenses내용 변경
  const yearChangeHandler = (selectedYear) => {
    setFilterdedYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear} // 여기서 selected는 내가 정한 props 이름 - 이것을 ExpensesFilter에서 밸류값으로 사용
          onYearFilter={yearChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

        {/* 위에서 map()을 이용하여 배열로 app.js에 있는 const expenses의 내용을 받아옴
         <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />*/}
      </Card>
    </div>
  );
}

export default Expense;

/* ExpensesFilter의 셀렉트 박스 년도 선택을 하면 여기에 보여지게 만들기 위해 두 컴포넌트 연결

1.연도가 필터된 내용을 Expenses에서 보여주기위해
 return문 안의 <card> 안에다 <ExpensesFilter/> 설정

2. 셀렉트 박스의 연도를 변경하면 그 것이 보여지게 하기 위해 함수를 하나 만듬
const yearChangeHandler =(selectedYear)=>
 - 선택되어진 연도가 보이게 할 것이니까 이름을 정의해서 파라미터값으로 넣음

3.yearChangeHandler함수를 컴포넌트로 내려보냄 (props를 추가)
onYearFilter={yearChangeHandler} 
 - 여기서 onYearFilter는 props의 이름으로 임의 정의 
 - 이 props를 자식 컴포넌트 ExpensesFilter로 보낼것


7. ExpensesFilter에서 받아온 값을 state로 관리
 - import React, { useState } from "react";

8. 화면에 보여질 연도를 먼저 초기화
 - const [] = useState('2020') 2020년으로 초기화

9. state 구문법으로 임의 이름의 함수 설정
 - const [filteredYear, setFilterdedYear]

10. 핸들링 함수가 실행될 때마다 매개변수로 받은 selectedYear를 setFilterdedYear에 설정
  const yearChangeHandler = (selectedYear) => { 
      setFilterdedYear(selectedYear);
    };

$$ 양방향 바인딩
- 연도가 변할때 마다 값이 적용되는 것은 Expenses로 전달은 되었지만 ExpensesFilter의 컴포넌트안에서 적용된 값으로 변화는 안된다
  선택되어진 값(filteredYear)을 셀렉트의 드롬다운 메뉴의 값으로 전달하고자 양방향 바인딩을 이용

현재 상태 초기값을 useState("2021")로 2021년이 보여지게 해놓음 - 변경을 해도 화면에서 변화된것이 보이지 않음
1. 컴포넌트안의  ExpensesFilter안에 props를 생성
selected={}

2. 전달할 값 입력
selected={filteredYear}

3. ExpensesFilter.js 파일로 가서 select 속성에 value값으로 props 넣어줌
value={props.selected}
*/

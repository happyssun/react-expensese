import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  //셀렉트박스의 연도 변경시 보여지는 값
  const changeYearHandler = (event) => {
    props.onYearFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={changeYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

/*
$$셀렉트 박스의 연도를 변경할 때 마다 값이 보여짐
1. 셀렉트 안에 onChange 속성을 넣고

2. onChange={changeYearHandler} 와 연결 - 이 함수에서 포인터를 onChange로 전달
  const changeYearHandler = () => {};
  - 여기에선 함수를 작동시키지 않고 가리키기만 함

3. 매개변수로 event를 넣고 거기서 선택된 값을 가져옴
  const changeYearHandler = (event) => {
    console.log(event.target.value);
  };


$$부모 ExpensesFiliter.js로 부터 - 이어서
4. 부모 컴포넌트에서(3번참고) 만든 props 가져오기 : 얘는 props고 그 이름은 onYearFilter 그안의 함수값
const changeYearHandler = (event) => {
  props.onYearFilter(event.target.value);
}

5. onYearFilter라는 props이름으로 받는 함수를 호출해서 (event.target.value)를 보냄
- (event.target.value)의 값은 우리가 선택한 연도

6. 값이 Expenses로 보내졌고 그것을 state로 관리 -> Expenses.js로
 */

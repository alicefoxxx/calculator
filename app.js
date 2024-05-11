const addForm = document.getElementById("add-form");
const subForm = document.getElementById("sub-form");

// 덧셈
const formSubmitHandler = (event) => {
  event.preventDefault();

  const firstValue = document.getElementById("first");
  const secondValue = document.getElementById("second");

  const output = document.getElementById("result");

  // 덧셈 함수 호출
  const result = add(Number(firstValue.value), Number(secondValue.value));

  // 결과 값 출력
  output.textContent = result;
};

// 뺄셈
const minusFormSubmitHandler = (event) => {
  event.preventDefault();

  const minusFirstValue = document.getElementById("minusFirst");
  const minusSecondValue = document.getElementById("minusSecond");
  const minusOutput = document.getElementById("minusResult");

  // 뺄셈 함수 호출
  const result = minus(
    Number(minusFirstValue.value),
    Number(minusSecondValue.value)
  );

  // 결과 값 출력
  minusOutput.textContent = result;
};

addForm.addEventListener("submit", formSubmitHandler);
subForm.addEventListener("submit", minusFormSubmitHandler);

// 덧셈 함수 구현
const add = (a, b) => a + b;

// 마이너스 함수 구현
const minus = (a, b) => a - b;

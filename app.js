// 폼에서 값 추출
const firstValue = document.getElementById("first");
const secondValue = document.getElementById("second");

const output = document.getElementById("result");

// 결과값 출력
const formSubmitHandler = (event) => {
  event.preventDefault();

  // 덧셈 함수 호출
  const result = add(Number(firstValue.value), Number(secondValue.value));

  // 결과 값 출력
  output.textContent = result;
};

form.addEventListener("submit", formSubmitHandler);

// 덧셈 함수 구현
const add = (a, b) => a + b;

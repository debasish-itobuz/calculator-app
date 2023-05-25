const num = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const calcOn = document.querySelector("#on");
const percentage = document.querySelector("#percentage");
const clear = document.querySelector("#clear");
const plusMinus = document.querySelector("#plus-minus");
const decimalPoint = document.querySelector("#decimal");

let count = 0;
let flag = 0;
let operand1 = 0;
let operand2 = 0;
let result = 0;
let oper = "";
let value = 0;
// for (let i = 0; i < num.length; i++) {
//   num[i].addEventListener("click", () => {
//     console.log(num[i].innerHTML);
//     display.value += num[i].innerHTML;
//     // console.log(display.value);
//   });
// }

num.forEach((element) => {
  element.addEventListener("click", () => {
    display.innerHTML += element.innerHTML;
    operand1 = Number(display.innerHTML);

  });
});

operator.forEach((element) => {
  element.addEventListener("click", () => {
    count = 0;
    value = operand1;
    // console.log(operand1);
    oper = element.innerHTML;
    // console.log(operand1);
    display.innerHTML = "";
    // console.log(oper);
  });
});

equals.addEventListener("click", () => {
  count = 0;
  operand2 = Number(display.innerHTML);
  //   console.log(operand1);
  // console.log(oper);

  //   console.log(operand2);
  //   console.log(operand2);
  if (oper === "+") {
    
    result = value + operand2;
    display.innerHTML = result;
    operand1 = result;
    operand2 = "";
  } else if (oper === "-") {
    result = value - operand2;
    display.innerHTML = result;
    operand1 = result;
    operand2 = "";
  } else if (oper === "x") {
    result = value * operand2;
    display.innerHTML = result;
    operand1 = result;
    operand2 = "";
  } else if (oper === "/") {
    result = value / operand2;
    display.innerHTML = result;
    operand1 = result;
    operand2 = "";
  }
});

calcOn.addEventListener("click", () => {
  count = 0;
  display.innerHTML = "";
});

clear.addEventListener("click", () => {
  display.innerHTML = display.innerHTML.slice(0, -1);
});

percentage.addEventListener("click", () => {
  operand1 = Number(display.innerHTML);
  display.innerHTML = operand1 / 100;
});

plusMinus.addEventListener("click", () => {
  display.innerHTML *= -1;
});

decimalPoint.addEventListener("click", () => {
  if (count < 1) {
    display.innerHTML += decimalPoint.innerHTML;
    count++;
  }
});

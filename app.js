/*-------------------------------- Constants --------------------------------*/
const buttonsEl = document.querySelectorAll(".button");
const calculator = document.querySelector("#calculator");
const displayEl = document.querySelector(".display");

/*-------------------------------- Variables --------------------------------*/
let stagingNum = 0;
let initialNum = 0;
let stagingOp = "";
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", (event) => {
  console.log(`Target: ${event.target.innerText}`);

  if (event.target.classList.contains("number")) {
    displayEl.textContent = parseInt(stagingNum + event.target.textContent);
    stagingNum = parseInt(displayEl.textContent);
  } else if (event.target.innerText === "+") {
    initialNum = stagingNum + initialNum;
    stagingNum = 0;
    displayEl.textContent = initialNum;
    stagingOp = "+";
  } else if (event.target.innerText === "-") {
    initialNum = stagingNum + initialNum;
    stagingNum = 0;
    displayEl.textContent = initialNum;
    stagingOp = "-";
  } else if (event.target.innerText === "*") {
    initialNum = stagingNum + initialNum;
    stagingNum = 0;
    displayEl.textContent = initialNum;
    stagingOp = "*";
  } else if (event.target.innerText === "/") {
    initialNum = stagingNum + initialNum;
    stagingNum = 0;
    displayEl.textContent = initialNum;
    stagingOp = "/";
  } else if (event.target.innerText === "=") {
    calculateTotal();
  } else if (event.target.innerText === "C") {
    stagingNum = 0;
    initialNum = 0;
    stagingOp = "";
    displayEl.textContent = "";
  }

  console.log(`staging number: ${stagingNum}`);
  console.log(`total number: ${initialNum}`);
  console.log(`staging Operator: ${stagingOp}`);
});

/*-------------------------------- Functions --------------------------------*/
const calculateTotal = () => {
  let total = eval(initialNum + stagingOp + stagingNum);
  displayEl.textContent = total;
};

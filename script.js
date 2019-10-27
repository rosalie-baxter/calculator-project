const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator-keys")
const currentNumber = document.querySelector('.current-operand')

const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  return result
}

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {

    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = currentNumber.textContent
    const previousKeyType = calculator.dataset.previousKeyType
    const previousAction = calculator.dataset.previousAction

    Array.from(key.parentNode.children)
   .forEach(k => k.classList.remove('is-depressed'))

  if (!action) {
    calculator.dataset.previousKeyType = "number"
    if (displayedNum === "0"|| previousKeyType === "operator" && displayedNum !== "-"|| previousKeyType === 'calculate') {
      currentNumber.textContent = keyContent;
    } else {
      currentNumber.textContent = displayedNum + keyContent;
    }
  } if (
    action ==="add" ||
    action === "multiply" ||
    action === "divide"
  ) {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum

    if (firstValue && operator && previousKeyType!=='operator' &&
    previousKeyType !== 'calculate') {

    const calcValue = calculate(firstValue, operator, secondValue)
    currentNumber.textContent = calcValue
    calculator.dataset.firstValue = calcValue

  } else {
    calculator.dataset.firstValue = displayedNum
}
  key.classList.add("is-depressed")
  calculator.dataset.previousKeyType = "operator"
  calculator.dataset.operator = action

  if (action ==="add") {
  calculator.dataset.previousAction = "add"
} if (action ==="multiply") {
  calculator.dataset.previousAction = "multiply"
} if (action ==="divide") {
    calculator.dataset.previousAction = "divide"
    }
}
if (action === "subtract") {

  let firstValue = calculator.dataset.firstValue
  let operator = calculator.dataset.operator
  let secondValue = displayedNum
  if (previousKeyType=="operator" && firstValue && operator) {
    const operator = calculator.dataset.previousAction
    currentNumber.textContent = "-"
} else if (firstValue && operator && previousKeyType!==operator && previousKeyType !== "calculate") {
    const calcValue = calculate(firstValue, operator, secondValue)
    currentNumber.textContent = calcValue
    calculator.dataset.firstValue = calcValue
    calculator.dataset.operator = action
  } else {
    calculator.dataset.firstValue = displayedNum
    calculator.dataset.operator = action
}
  key.classList.add("is-depressed")
  calculator.dataset.previousKeyType = "operator"
  calculator.dataset.previousAction = "subtract"
}
 if (action==="decimal") {
  calculator.dataset.previousKeyType = "decimal"
  if (previousKeyType === 'operator') {
  currentNumber.textContent = '0.'
} else if (!displayedNum.includes('.')) {
    currentNumber.textContent = displayedNum + '.'
  }
}
  if (action==="clear") {
    calculator.dataset.firstValue = ''
    calculator.dataset.modValue = ''
    calculator.dataset.operator = ''
    calculator.dataset.previousKeyType = ''
    calculator.dataset.previousAction = ''
    calculator.dataset.previousKeyType = "clear"
    currentNumber.textContent = 0;
  }  if (action==="delete" && currentNumber.textContent != 0) {
    if (currentNumber.textContent.length==1) {
      currentNumber.textContent="00"
    }
    calculator.dataset.previousKeyType = "delete"
    let number = currentNumber.textContent.split("");
    let spare = number.pop();
    currentNumber.textContent = number.join("");
  }if (action==="calculate") {
    let firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    let secondValue = displayedNum

    if (firstValue) {
      if (previousKeyType === "calculate") {
        firstValue = displayedNum;
        secondValue = calculator.dataset.modValue
      }
    currentNumber.textContent = calculate(firstValue, operator, secondValue);
  } calculator.dataset.modValue = secondValue;
  calculator.dataset.previousKeyType = "calculate"
  }
  }
})

document.addEventListener('keydown', keyManipulation);

function keyManipulation(e) {
  if (e.keyCode === 49){
  ;
  }
  if (e.keyCode === 37)
  {
    togglePicture(-1);
  }
    if (e.keyCode === 32)
  { if (playing == true) {
    pauseSlideshow();
  } else if (playing == false) {
    playSlideshow();
  }
  }
};

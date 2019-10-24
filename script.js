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

    Array.from(key.parentNode.children)
   .forEach(k => k.classList.remove('is-depressed'))

  if (!action) {
    calculator.dataset.previousKeyType = "number"
    if (displayedNum === "0"|| previousKeyType === "operator" || previousKeyType === 'calculate') {
      currentNumber.textContent = keyContent;
    } else {
      currentNumber.textContent = displayedNum + keyContent;
    }
  } if (
    action ==="add" ||
    action === "subtract" ||
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
    calculator.dataset.previousKeyType = "clear"
    currentNumber.textContent = "0";
  }  if (action==="delete") {
    calculator.dataset.previousKeyType = "delete"
    currentNumber.textContent.length--;
  }if (action==="calculate") {
    let firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    let secondValue = displayedNum

    if (firstValue) {
      if (previousKeyType === "calculate") {
        firstValue = displayedNum;
        secondValue = calculator.dataset.modValue
        console.log(displayedNum);
        console.log(firstValue);
        console.log(secondValue);
      }
    currentNumber.textContent = calculate(firstValue, operator, secondValue);
  } calculator.dataset.modValue = secondValue;
  calculator.dataset.previousKeyType = "calculate"
  }
  }
})

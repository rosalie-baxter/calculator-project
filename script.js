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
    calculator.dataset.previousKeyType = "numberkey"
    if (displayedNum === "0"|| previousKeyType === "operator") {
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
  key.classList.add("is-depressed")
  calculator.dataset.previousKeyType = "operator"
  calculator.dataset.firstValue = displayedNum
  calculator.dataset.operator = action
  } if (action==="clear") {
    console.log("clear!")
  }  if (action==="delete") {
    console.log("delete!")
  } if (action==="calculate") {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
  currentNumber.textContent = calculate(firstValue, operator, secondValue)
  }
  }
})

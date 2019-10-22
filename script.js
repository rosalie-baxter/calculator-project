const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator-keys")
const currentNumber = document.querySelector('.current-operand')
const previousKeyType = calculator.dataset.previousKeyType

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = currentNumber.textContent
    Array.from(key.parentNode.children)
   .forEach(k => k.classList.remove('is-depressed'))
  if (!action) {
    if (displayedNum ==="0"|| previousKeyType === "operator") {
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
  calculator.dataset.previousKeyType = 'operator'
  } if (action==="clear") {
    console.log("clear!")
  }  if (action==="delete") {
    console.log("delete!")
  } if (action==="calculate") {
    console.log("equals!")
  }
  }
})

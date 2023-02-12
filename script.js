const btn = document.querySelector("button")

function calculateSum() {
  const num1 = document.querySelector("#num1").value
  const num2 = document.querySelector("#num1").value
  const result = document.querySelector("div")
  result.innerText =  num1 + num2
}

btn.addEventListener("click", calculateSum)
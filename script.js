let display = document.querySelector("#numeros");
let teclado = document.querySelector(".teclado");
let numero1 = "";
let numero2 = "";
let operation = null;

function soma(num1, num2) {
  return num1 + num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function divisao(num1, num2) {
  if (num2 === 0) {
    return null;
  }
  return num1 / num2;
}

function clearOperation() {
  numero1 = "";
  numero2 = "";
  operation = null;
  display.innerText = 0;
}

function cancelEntry() {
  if (operation !== null) {
    numero2 = "";
  } else {
    numero1 = "";
  }
  display.innerText = 0;
}

function calculate() {
  if (operation === "+") {
    let resultado = soma(Number(numero1), Number(numero2));
    display.innerText = resultado;
    numero1 = resultado;
    numero2 = "";
  } else if (operation === "-") {
    let resultado = subtracao(Number(numero1), Number(numero2));
    display.innerText = resultado;
    numero1 = resultado;
    numero2 = "";
  } else if (operation === "X") {
    let resultado = multiplicacao(Number(numero1), Number(numero2));
    display.innerText = resultado;
    numero1 = resultado;
    numero2 = "";
  } else if (operation === "/") {
    let resultado = divisao(Number(numero1), Number(numero2));
    if (resultado === null) {
      resultado = "Erro";
    }
    display.innerText = resultado;
    numero1 = resultado;
    numero2 = "";
  }
}

teclado.addEventListener("click", (e) => {
  if (e.target.classList.contains("numbers")) {
    if (operation !== null) {
      numero2 += e.target.textContent;
      display.innerText = numero2;
    } else {
      numero1 += e.target.textContent;
      display.innerText = numero1;
    }
  } else if (e.target.classList.contains("operations")) {
    operation = e.target.textContent;
  } else if (e.target.id === "CE") {
    cancelEntry();
  } else if (e.target.id === "C") {
    clearOperation();
  } else if (e.target.id === "igual") {
    calculate();
  }
});

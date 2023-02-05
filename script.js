let display = document.querySelector("#numeros");
let teclado = document.querySelector(".teclado");
let numero1 = "";
let numero2 = "";
let operation = null;

function soma(num1, num2) {
  console.log(num1);
  console.log(num2);
  return num1 + num2;
}

teclado.addEventListener("click", (e) => {
  console.log(e.target.textContent);

  if (e.target.classList.contains("numbers")) {
    console.log(e.target.classList.contains("numbers"));
    if (operation !== null) {
      console.log(operation !== null);
      numero2 += e.target.textContent;
      display.innerText = numero2;
    } else {
      numero1 += e.target.textContent;
      display.innerText = numero1;
    }
  } else if (e.target.classList.contains("operations")) {
    console.log(e.target.classList.contains("operations"));
    operation = e.target.textContent;
  } else if (e.target.id === "CE") {
    numero1 = "";
    numero2 = "";
    operation = null;
    display.innerText = 0;
  } else if (e.target.id === "igual") {
    console.log(e.target.id === "igual");
    console.log(operation);
    if (operation === "+") {
      console.log(operation === "+");
      let resultado = soma(Number(numero1), Number(numero2));
      console.log(resultado);
      display.innerText = resultado;
    }
  }
  console.log(numero1);
  console.log(numero2);
  console.log(operation);
});

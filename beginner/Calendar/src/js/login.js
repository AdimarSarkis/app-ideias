const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const login = document.querySelector(".login");
const btnSignin = document.querySelector("#signin");
const btnSignup = document.querySelector("#signup");
const detail = document.querySelector(".detail");

const loginFormulario = document.querySelector(".tab-content > div:last-child");
const cadastroFormulario = document.querySelector(".tab-content > div:first-child");

btnSignin.addEventListener("click", () => {
  login.style.flexDirection = "row-reverse";
  loginFormulario.style.display = "block";
  cadastroFormulario.style.display = "none";

  btnSignin.classList.toggle("active");
  btnSignup.classList.toggle("active");
});

btnSignup.addEventListener("click", () => {
  login.style.flexDirection = "row";
  loginFormulario.style.display = "none";
  cadastroFormulario.style.display = "block"

  btnSignin.classList.toggle("active");
  btnSignup.classList.toggle("active");
});

for(let i=0; i <6; i++){

  inputs[i].addEventListener("focusin", () => {
    labels[i].classList.add("active");
  });
  
  inputs[i].addEventListener("focusout", () => {
    (!!!inputs[i].value) ? 
    labels[i].classList.remove("active")
    :
    false;
  })
}

setInterval(() => {
  const tamanhoTela = window.innerWidth;
  console.log(tamanhoTela)
  if(tamanhoTela <= 433){
    inputs[0].style.width = "205%";
    labels[0].style.width = "205%";
  }
}, 1000);
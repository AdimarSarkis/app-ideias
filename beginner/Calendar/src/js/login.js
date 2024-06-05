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
}, 10000);

// login e validar
const btnCadastrar = document.querySelector("#cadastro");
const btnEntrar = document.querySelector("#entrar")

const cadastrar = (e) => {
  e.preventDefault();
  const usuarioEmail = inputs[2].value;
  const usuarioPassword = inputs[3].value;
  const usuarioPrimeiroNome = inputs[0].value;
  const usuarioUltimoNome = inputs[1].value;
  
  
  let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");
  
  listaUser.forEach(element => {
    if(usuarioEmail != element.Email){
      listaUser.push({
        Email: usuarioEmail,
        Password: usuarioPassword,
        PrimeiroNome: usuarioPrimeiroNome,
        UltimoNome: usuarioUltimoNome
      });

      localStorage.setItem("listaUser", JSON.stringify(listaUser));

      alert("Usuario cadastrado com sucesso");

      login.style.flexDirection = "row-reverse";
      loginFormulario.style.display = "block";
      cadastroFormulario.style.display = "none";
      btnSignin.classList.toggle("active");
      btnSignup.classList.toggle("active");
    }
  })

  alert("Email já em uso")
}


const logar = (e) => {
  e.preventDefault();
  let usuarioEmail = inputs[4].value;
  let usuarioSenha = inputs[5].value;
  let listaUser = [];
  let userValid = {
    email: "",
    senha: ""
  };

  listaUser = JSON.parse(localStorage.getItem("listaUser"))

  listaUser.forEach(element => {
    if(usuarioEmail == element.Email && usuarioSenha == element.Password){
      userValid = {
        email: element.Email,
        senha: element.Password
      }
    }
  });

  if(usuarioEmail == userValid.email && usuarioSenha == userValid.senha){
    location.assign("./home.html");
  }else{
    alert("Email e/ou Senha incorretos");
  }

console.log(userValid)
  
}


btnCadastrar.addEventListener("click", cadastrar)
btnEntrar.addEventListener("click", logar)
const html = document.querySelector("html");
const checkbox = document.querySelector("#switch");


checkbox.addEventListener("change", () => {
    html.classList.toggle("dark-mode");
})

const toggleBtn = document.querySelector("#switch");
const lis = document.querySelectorAll("li");


lis[3].addEventListener("click", () => {
    html.classList.toggle("dark-mode");
    
    (toggleBtn.checked) ?
        toggleBtn.checked = false :   
        toggleBtn.checked = true;
})

const navIcon = document.querySelector("#nav-icon1");
const navbar = document.querySelector('ul');

navIcon.addEventListener("click", () => {
    navIcon.classList.toggle('open');

    (navIcon.classList.contains('open')) ? navbar.style.display = "flex" : navbar.style.display = "none"
})



/*
    const teste = document.querySelector(":root");
    var varia = getComputedStyle(teste)
    
    const colorTeste = varia.getPropertyValue("--ColorPrimary")
    const ColorPrimaryUserPrefer = teste.style.setProperty("--ColorPrimary", "#8F7899");
    
// pega o valor da variavel css
const variaveisCss = getComputedStyle(document.documentElement);
const ColorPrimary = variaveisCss.getPropertyValue("--ColorPrimary");


console.log(`Cor antiga: ${ColorPrimary}`);
console.log(`Cor nova favorita do usuario: ${ColorPrimaryUserPrefer}`)*/
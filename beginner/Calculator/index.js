const tela = document.querySelector(".tela");
var foiExe = false;

const colocarDigito = (tecla) => {
   tela.innerHTML = tela.innerHTML + tecla;
}

const apagar = () => {
    tela.innerHTML = tela.innerHTML.substring(0, tela.innerHTML.length -1)
}

const limpar = () => {
    tela.innerHTML = "";
}

const calcular = () => {
   const sub = "-";
   const sum = "+";
   const mult = "*";
   const div = "/";
   const mod = "%";

    const resultado = tela.innerHTML;
    var auxiliar = "";
    var pre = '', pos='', operacao = "";

    for(let i = 0; i < resultado.length; i++){
        if(resultado[i].includes(sub) || (resultado[i].includes(sum)) || (resultado[i].includes(mult))
        || (resultado[i].includes(div)) || (resultado[i].includes(mod))){
            console.log(resultado[i])
            operacao = resultado[i];
            auxiliar = resultado.split(resultado[i]);
            pre = auxiliar[0];
            pos = auxiliar[1];
        }
    }

    switch(operacao){
        case '*':
            tela.innerHTML = pre * pos;
            break;
        case '+':
            tela.innerHTML = Number.parseFloat(pre) + Number.parseFloat(pos);
            break;
        case '-':
            tela.innerHTML = pre - pos;
            break;
        case '/':
            tela.innerHTML = pre / pos;
            break;
        case '%':
            tela.innerHTML = pre % pos;
            break;
    }
}

document.addEventListener("keypress", (event) => {
    const teclasPossieis = [".","0","1","2","3","4","5","6","7","8","9","-","+","/","*","%"];

    for(let i=0;i<teclasPossieis.length;i++){
        if(event.key == teclasPossieis[i]){
            colocarDigito(event.key)
        }
    }
})

document.addEventListener("keydown", (event) => {
    if(event.key == "Backspace"){
        console.log(event.key)
        apagar();
    }
    if(event.key == "Enter"){
        calcular()
    }
})
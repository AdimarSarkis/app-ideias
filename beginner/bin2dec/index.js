const valorRecebido = document.querySelector("input");
const valorRecebidoDec = document.querySelector("#dec");
const valorRecebidoHex = document.querySelector("#hex");
const valorRecebidoOctal = document.querySelector("#octal");
const resultado1 = document.querySelector("#result1");
const resultado2 = document.querySelector("#result2");
const resultado3 = document.querySelector("#result3");

valorRecebido.addEventListener("input", function () {
  this.value = this.value.replace(/[^01]/g, "");
});

const handlerClick = (tipo) => {
  switch (tipo) {
    case "bin2dec":
      bin2dec();
      break;

    case "bin2hex":
      if (valorRecebidoHex.value.length % 4 == 0) {
        SepararGrupo4();
      } else {
        do {
           valorRecebidoHex.value = 0+valorRecebidoHex.value;
        } while (valorRecebidoHex.value.length % 4 != 0)
        SepararGrupo4();
      }
      break;

    case "bin2octal":
      if (valorRecebidoOctal.value.length % 3 == 0) {
        AgruparGrupo3()
      } else {
        do {
            valorRecebidoOctal.value = 0+valorRecebidoOctal.value;
        } while (valorRecebidoOctal.value.length % 3 != 0);
        AgruparGrupo3()
      }
      break;
  }
};

const bin2dec = () => {
  let soma = 0;
  for (let i = 0; i < valorRecebidoDec.value.length; i++) {
    soma = soma * 2 + Number.parseInt(valorRecebidoDec.value[i]);
  }
  resultado1.innerHTML = soma;
};

const SepararGrupo4 = () => {
  let parte1 = [];
  let parte2 = [];
  let soma1 = 0;
  let soma2 = 0;

  for (let i = valorRecebidoHex.value.length - 1; i >= 0; i--) {
    if (i > 3) {
      parte1[i] = valorRecebidoHex.value[i];
    } else {
      parte2[i] = valorRecebidoHex.value[i];
    }
  }

  parte1.splice(0, 4);

  for (i = 0; i < 4; i++) {
    soma1 = soma1 * 2 + Number.parseInt(parte1[i]);
    soma2 = soma2 * 2 + Number.parseInt(parte2[i]);
  }

  let resultSoma1 = ConvertDec2Hex(soma1);
  let resultSoma2 = ConvertDec2Hex(soma2);
  console.log(`resultado soma1: ${resultSoma1}`);
  console.log(`resultado soma2: ${resultSoma2}`);
  if(!!!resultSoma1) {
    resultado2.innerHTML = resultSoma2;
  }else{
    resultado2.innerHTML = resultSoma2+resultSoma1
  }
};

const AgruparGrupo3 = () => {
    let parte1 = [];
    let parte2 = [];
    let parte3 = [];
    let soma1 = 0;
    let soma2 = 0;
    let soma3 = 0;


    for (let i = valorRecebidoOctal.value.length; i >= 0; i--) {
        if (i > 5) {
            parte1[i] = valorRecebidoOctal.value[i];
        } else if(i>2 && i<6) {
            parte2[i] = valorRecebidoOctal.value[i];
        } else {
            parte3[i] = valorRecebidoOctal.value[i]
        }
    }

    parte1.splice(0,6)
    parte1.splice(3,1)
    parte2.splice(0,3)
    for (i = 0; i < 3; i++) {
        soma1 = soma1 * 2 + Number.parseInt(parte1[i]);
        soma2 = soma2 * 2 + Number.parseInt(parte2[i]);
        soma3 = soma3 * 2 + Number.parseInt(parte3[i]);
    }
    console.log(`soma1: ${soma1} ${!!soma1} `)
    console.log(`soma2: ${soma2} ${!!soma2}`)
    console.log(`soma3: ${soma3} ${!!soma3}`)
    
    if(!!!soma2 && !!!soma1 || (!!!soma3 && soma3==0)){
      resultado3.innerHTML = soma3.toString();
    }else if(!!!soma1 && !!!soma2 && !!!soma3 || (soma2 == 0 || soma3==0)){
      resultado3.innerHTML = soma3.toString()+soma2.toString();
    }else{
      resultado3.innerHTML = soma3.toString()+soma2.toString()+soma1.toString();
    }
/*
    if(!!!soma3 || soma3 == 0){
        console.log("negando soma3")
        resultado3.innerHTML = soma3.toString()+soma2.toString();
    }else if(!!!soma2 || soma2 == 0){
        console.log("negando soma2")
        resultado3.innerHTML = soma3.toString();
    }else{
        console.log("negando soma1")
        resultado3.innerHTML = soma3.toString()+soma2.toString()+soma1.toString();
    }*/
}

const ConvertDec2Hex = (aux) => {
    let result;
  switch (aux) {
    case 10:
      result = "A";
      break;
    case 11:
      result = "B";
      break;
    case 12:
      result = "C";
      break;
    case 13:
      result = "D";
      break;
    case 14:
      result = "E";
      break;
    case 15:
      result = "F";
      break;
      default:
        result = aux;
  }
  return result;
};
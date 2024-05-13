const btnCSV = document.querySelector("#csv");
const TooltipCopy = document.getElementById("TooltipCopy");
const TooltipDelete = document.getElementById("TooltipDelete");
const TooltipDownload = document.getElementById("TooltipDownload");
const boxEntrada = document.getElementById("entrada");
const boxSaida = document.getElementById("saida");
const copyText = document.querySelector("#saida");

function copy() {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    TooltipCopy.innerHTML = "Copied: " + copyText.value;
    
}
function saidaMouse() {
    TooltipCopy.innerHTML = "Copy to clipboard";
}
const handleDownload = () => {

}

const handleDelete = () => {
    boxEntrada.value = "";
    boxSaida.value = "";
}
const converterParaCsv = () => {
    const objectJson = JSON.parse(boxEntrada.value);

    console.log(`Chaves: ${Object.keys(objectJson)}`)
    console.log(`Values: ${Object.values(objectJson)}`)

    
    boxSaida.value = `    ${Object.keys(objectJson)}
    ${Object.values(objectJson)}`;
}

const converterParaJson = () => {
    const arr = boxEntrada.value.toString().split("\n");

    const header = arr[0].split(",");

    let jsonObject = []

    for(let i=1; i< arr.length;i++){
        let data = arr[i].split(",");
        let object = {}
        for(let j=0;j<data.length;j++){
            object[header[j]] = data[j];
        }
        jsonObject.push(object);
    }
    
    console.log(jsonObject)
    boxSaida.value = JSON.stringify(jsonObject);
}

const lerArquivo = (file) => {
    const reader = new FileReader();

    reader.addEventListener("load", (e) => {
        const dados = e.target.value;
        console.log(dados)
        boxEntrada.value = dados;
    })
    reader.readAsText(file[0]);
}

const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomRight = document.querySelector('#bottom-right');
const copyText = document.querySelector("#borderRadius");
const tooltip = document.getElementById("Tooltip");

const reset = () => {
    topLeft.value = 0;
    topRight.value = 0;
    bottomLeft.value = 0;
    bottomRight.value = 0;
}

const shape = document.querySelector('.shape');

document.addEventListener("change", (e) => {
    let topLeft100 = 100 - topLeft.value;
    let topRight100 = 100 - topRight.value;
    let bottomLeft100 = 100 - bottomLeft.value;
    let bottomRight100 = 100 - bottomRight.value;

    shape.style.borderRadius = `${topRight100}% ${topRight.value}% ${bottomLeft100}% ${bottomLeft.value}% / ${topLeft.value}% ${bottomRight100}% ${bottomRight.value}% ${topLeft100}%`
    copyText.value = `${topRight100}% ${topRight.value}% ${bottomLeft100}% ${bottomLeft.value}% / ${topLeft.value}% ${bottomRight100}% ${bottomRight.value}% ${topLeft100}%`;
});
function copy() {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    tooltip.innerHTML = "Copied: " + copyText.value;
    
}
function saidaMouse() {
    tooltip.innerHTML = "Copy to clipboard";
}
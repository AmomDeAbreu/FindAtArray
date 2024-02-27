const array1 = [11,25,3,43,59,6,72,18,29,10,10];
let input1 = document.querySelector(".in_txt");
const btn = document.querySelector("#btn3");
const res = document.querySelector("#resultado");
const a1 = document.querySelector("#a1");

a1.innerText = "Array: [" + array1 + "]";


btn.addEventListener("click", () => {
    let n1 = Number(input1.value);
    let index = array1.findIndex((el) => {
        return el == n1;
    });
    
    res.innerHTML = "Valor encontrado na posição " + index + "!";
})
const array1 = ["Amom", "Amom", "Amom", "Amom"];
let input1 = document.querySelector(".in_txt");
const btn = document.querySelector("#btn3");
const res = document.querySelector("#resultado");
const a1 = document.querySelector("#a1");

a1.innerText = "Array: [" + array1 + "]";


btn.addEventListener("click", () => {
    let n1 = input1.value.toString();
    let index = array1.every((e) => {
        e.toString();
        console.log(typeof e, typeof n1);
        return e.toLowerCase() === n1.toLowerCase();
    });
    
    if(index != -1)
        res.innerHTML = "Value found at " + index + " position!";
    else
        res.innerHTML = "Value not found!"; 
})
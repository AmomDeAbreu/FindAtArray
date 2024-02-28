const array1 = [13, 21, 12, 11, 93, 27, 1];
let input1 = document.querySelector(".in_txt");
const btn = document.querySelector("#btn3");
const res = document.querySelector("#resultado");
const a1 = document.querySelector("#a1");

a1.innerText = "Array: [" + array1 + "]";


btn.addEventListener("click", () => {
    let n1 = Number(input1.value);
    let index = array1.every((e,i) => {
        console.log(typeof e, typeof n1);
        if(e <= n1)
            return true;
        else
            res.innerHTML = "Array doesn't meet the requirements at "+ i + " position."; 
    });
    
    if(index)
        res.innerHTML = "Array meets the requirements";
})
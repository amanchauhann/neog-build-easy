const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const button = document.getElementById("btn");
const answer = document.getElementById("answer");

button.addEventListener("click", ()=>{
    const oneValue = one.value;
    const twoValue = two.value;
    const threeValue = three.value;
    const sum = Number(oneValue) + Number(twoValue) + Number(threeValue);
    answer.textContent = sum;
});

// -------------------------------------------

const oddEven = document.getElementById("oddEven");
const btnOddEven = document.getElementById("btnOddEven");
const resultOddEven = document.getElementById("resultOddEven");

btnOddEven.addEventListener("click", ()=>{
    const nmber = Number(oddEven.value);
    nmber % 2 == 0 ? 
    resultOddEven.textContent = "even" 
    : resultOddEven.textContent = "Not even";
})

// --------------------------------------------


const maxMin = document.getElementById("maxMin");
const minMax = document.getElementById("minMax");
const maxMinSubmit = document.getElementById("maxMinSubmit");
const resultMax = document.getElementById("resultMax");
const resultMin = document.getElementById("resultMin");



maxMinSubmit.addEventListener("click", ()=>{
    const firstValue = Number(maxMin.value);
    const secondValue = Number(minMax.value);
    resultMax.textContent = Math.max(firstValue, secondValue);
    resultMin.textContent = Math.min(firstValue, secondValue);
})
// --------------------------------------------


const month = document.getElementById("month");
const monthSumbit = document.getElementById("monthSumbit");
const monthResult = document.getElementById("monthResult");


monthSumbit.addEventListener("click", ()=>{
    const monthValue =  month.value;
    const realMonth = monthValue.toLowerCase().trim();
        realMonth === "january" || realMonth === "march" || realMonth === "may" || realMonth === "july" || realMonth === "august" || realMonth === "october" || realMonth === "december"
        ? monthResult.innerText =  "31 days" 
        : monthResult.innerText =  "Not 31 days";
    
})
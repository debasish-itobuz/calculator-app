const num = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const display = document.querySelector('#display')
let operand1 = 0;
let operand2 = 0;
let result = 0;


// for(let i = 0; i<num.length; i++) {
//     num[i].addEventListener('click', ()=>{
//         // alert(num[i].innerHTML);
//         display.value += num[i].innerHTML;
//         // console.log(typeof(display.value));
//     })
// }

for(let j = 0; j<operator.length; j++) {
    operator[j].addEventListener('click', ()=>{
        // alert(operator[j].innerHTML);
        // display.value = operator[j].innerHTML;
        console.log(display.value);
        console.log(operator[j].innerHTML);
        console.log(display.value += operator[j].innerHTML);

    })
}

num.forEach(element => {
    element.addEventListener("click",()=> {
        display.value += element.innerHTML
    })
});

operator.forEach(element => {
    element.addEventListener("click",()=> {
        display.value += element.innerHTML
    })
});



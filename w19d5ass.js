const zero0 = document.getElementById('zero0')
const zero1 = document.getElementById('zero1')
const zero2 = document.getElementById('zero2')
const one0 = document.getElementById('one0')
const one1 = document.getElementById('one1')
const one2 = document.getElementById('one2')
const two0 = document.getElementById('two0')
const two1 = document.getElementById('two1')
const two2 = document.getElementById('two2')

const btn = document.getElementById('btn')

const res = document.getElementById('res')

btn.addEventListener('click',()=>{
    let result = "Draw"
    if(((zero0.value===zero1.value)&&(zero0.value===zero2.value)&&(zero0.value==="X"))||((one0.value===one1.value)&&(one0.value===one2.value)&&(one0.value==="X"))||((two0.value===two1.value)&&(two0.value===two2.value)&&(two0.value==="X"))
    ||((zero0.value===one1.value)&&(zero0.value===two2.value)&&(zero0.value==="X"))||((zero2.value===one1.value)&&(zero2.value===two0.value)&&(zero2.value==="X"))||
    ((zero0.value===one1.value)&&(zero0.value===two0.value)&&(zero0.value==="X"))||((zero1.value===one1.value)&&(zero1.value===two1.value)&&(zero1.value==="X"))||
    ((zero2.value===one2.value)&&(zero2.value===two2.value)&&(zero2.value==="X")))
    {
    result = "X wins";
    // console.log("X wins")
    }
    if(((zero0.value===zero1.value)&&(zero0.value===zero2.value)&&(zero0.value==="0"))||((one0.value===one1.value)&&(one0.value===one2.value)&&(one0.value==="0"))||((two0.value===two1.value)&&(two0.value===two2.value)&&(two0.value==="0"))
    ||((zero0.value===one1.value)&&(zero0.value===two2.value)&&(zero0.value==="0"))||((zero2.value===one1.value)&&(zero2.value===two0.value)&&(zero2.value==="0"))||
    ((zero0.value===one1.value)&&(zero0.value===two0.value)&&(zero0.value==="0"))||((zero1.value===one1.value)&&(zero1.value===two1.value)&&(zero1.value==="0"))||
    ((zero2.value===one2.value)&&(zero2.value===two2.value)&&(zero2.value==="0")))
    {
    result = "0 wins" ;
    // console.log("0 wins")
    }
    res.value=result
    // console.log(result,res.value);
})
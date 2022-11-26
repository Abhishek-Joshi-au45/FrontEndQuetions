
const a = document.querySelector('#Number1')
const b = document.querySelector('#Number2')

const btn = document.querySelector('#btn')

btn.addEventListener('click',(event)=>{
    var sum = Number((a).value)+Number((b).value);
    document.getElementById('result').innerHTML=sum
    a.value=null
    b.value=null
    event.preventDefault();
}
)

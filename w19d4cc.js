const num = document.querySelector('#input')

const add = document.querySelector('#push')
const del = document.querySelector('#pop')

var oldEle=document.getElementById('result')

add.addEventListener('click',(event)=>{
    const pushEle = num.value
    
    const oldtask =  oldEle.innerHTML
    oldEle.innerHTML =`${oldtask}<li>${pushEle}</li>`
    num.value=null;
    event.preventDefault();
}
)

del.addEventListener('click',(event)=>{
    
    event.preventDefault();
}
)
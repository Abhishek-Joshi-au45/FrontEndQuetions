const string = document.getElementById('input')

const btn = document.getElementById('submit')

const result =document.getElementById('res')

btn.addEventListener('click',()=>
{    var str = string.value;
     const array = str.split(",");
    // console.log(array)
    var str1 = array[0];
    var str2 = array[1];
    // console.log(str1,str2)
    var count=0;
    for(let i=0 ; i<str1.length; i++){
        if(str1[i]!=str2[i]){
            count+=1  } }
       if(count!==0){    
    result.value = count
   }
 })

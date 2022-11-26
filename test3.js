function processData(input) {
    //Enter your code here
     input = input.split("")
    let n = input.length;
    if(input[0]=="?")
        input[0]=1;
    for(let i = 0;i<n;i++){
        if(input[i]=="?"){
            if(input[i-1]==1)
                if(input[i+1]==2 && i+1<n-1)
                input[i]=3;
                else
                    input[i]=2;
            else if(input[i-1]==2)
                if(input[i+1]==1 && i+1<n-1)
                input[i]=3;
            else
                input[i]=1;
            else if(input[i-1]==3){
                if(input[i+1]==1 && i+1<n-1)
                    input[i]=2;
                else
                    input[i]=1;
            }
        }
    }
    input= input.join("")
    input=input.replace(/,/g, '');
    console.log(input)
} 
















function processData(input) {
    // Enter your code here
     let a=input.split("\n")
    
    let N=a[0].split(" ")[0]
    let M=a[0].split(" ")[0]
    let arr =[]
    for(let i=1;i<a.length;i++){
        let splitArr = a[i].split(" ")
        arr.push(splitArr)
    }
    let valueToCheck =arr[0][0]
    let pass = true
    
    for(let i =0; i< Number(M)-1  ; i++){
        if(arr[i][i] !=valueToCheck){
            pass = false
        }
    }
   console.log(pass ? 'YES' : 'NO' )

} 

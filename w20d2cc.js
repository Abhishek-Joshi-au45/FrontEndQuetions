let users=[]
let tablerows = `<tr><th>name</th><th>username</th></tr>`
let usertablele = document.querySelector(".user-table")
let input = document.querySelector("#search")
fetch("https://jsonplaceholder.typicode.com/users").then(
    response=>response.json()).then(res=>{
        users=res
        constructtable(users)
})
input.addEventListener("input",(event)=>{
    const searchtext = event.target.value
    const selectedusers = users.filter((user)=>{
        return user.name.includes(searchtext) || user.username.includes(searchtext)
    })
    usertablele.innerHTML = ""
    constructtable(selectedusers)
   
})

function constructtable(users){
    
    let table=document.createElement("table")
usertablele.append(table)
for(let i=0;i<users.length;i++){
    const userobj = users[i]
    const name = userobj.name
    const username = userobj.username
    table.innerHTML += `<tr class="rows" ><th>${name}</th><th>${username}</th></tr>`}
}
// JS file

const addBtnEle = document.querySelector('#add-btn')
const inputEle = document.querySelector('#task-input')
const toDoList = document.querySelector('#to-do')
addBtnEle.addEventListener('click', () => {
  const newTask = inputEle.value //user input 
  const oldTasks = toDoList.innerHTML //get old task
  console.log(oldTasks)
  inputEle.value = null
  const liEle = document.createElement('li') 
  liEle.innerText = newTask 
  const deleteBtnEle = document.createElement('button') //<button></button>
  deleteBtnEle.innerText = 'X' //<button>X</button>
  deleteBtnEle.addEventListener('click', removeTaskHandler)
  //apend button to li tag
  liEle.append(deleteBtnEle) //<li>Task 3<button>X</button></li>
  // liEle.appendChild(deleteBtnEle) //Only HTMLNodes
  //append li tag to unordered list
  toDoList.prepend(liEle)
})
//Get the parent of button(i.e; li tag) and then remove it
function removeTaskHandler(event) {
  console.log("Delete button is clicked", event)
  event.target.parentElement.remove()
}
const Answer = document.querySelector('#option')

const btn = document.querySelector('#btn')

const Submit = document.querySelector('#submit')

const queEle = document.querySelector('#que')

const correctAns = document.querySelector('#CAns')

const IncAns1=document.querySelector('#InAns1')

const IncAns2=document.querySelector('#InAns2')

const IncAns3=document.querySelector('#InAns3')

let result;

btn.addEventListener('click', async (event) => {

  // var i = 0;
  // function buttonClick() {
  //     document.getElementById('inc').value = ++i;
  // }

  try {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple') //only works with async
    result = await response.json()
    for(let i=0 ; i<result.results.length; ++i){
    if (result.results[i].difficulty !== "medium") {
        queEle.innerText='There are some Error in loading the Quetion'
        // correctAns.innerText = 'Error Occured'
        // IncAns1.innerText = 'Error Occured'
        // IncAns2.innerText = 'Error Occured'
        // IncAns3.innerText = 'Error Occured'
      return
    }

    console.log(result.results)
    console.log(i)
    // console.log(result.results[0].correct_answer)
    // console.log(result.results[0].incorrect_answers[0])
    if (result.results[i].type === "multiple") {
        queEle.innerText=`Que ${i+1} : ${result.results[i].question}`
        correctAns.innerText = result.results[i].correct_answer
        IncAns1.innerText = result.results[i].incorrect_answers[0]
        IncAns2.innerText = result.results[i].incorrect_answers[1]
        IncAns3.innerText = result.results[i].incorrect_answers[2]
        // incorrectAns=result[0].results.incorrect_answers
         return
        }
}
  } catch (err) { //hanlde errors
    console.log(err)
    queEle.innerText='There are some netwrok problem'
    // correctAns.innerText = 'Error Occured'
    //     IncAns1.innerText = 'Error Occured'
    //     IncAns2.innerText = 'Error Occured'
    //     IncAns3.innerText = 'Error Occured'
  }
})

const FinalResult = document.querySelector('#pa')

Submit.addEventListener('click', ()=>{
  console.log("submit")
  FinalResult.innerText =  `Correct Ans is A: `
})
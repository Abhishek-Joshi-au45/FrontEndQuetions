const getJokeBtn = document.querySelector('#getImg')
const dogimage = document.querySelector('#dog')

var img = document.createElement("img");
    
getJokeBtn.addEventListener('click', (event) => {
  fetch('https://dog.ceo/api/breeds/image/random').then(responseObj => responseObj.json()).then(res => { //handle fulfill state
    console.log(res)
    if (res.status === 'success') {
        img.src = res.message

        dogimage.appendChild(img);
    //   dogimage.innerHTML = res.message
    } 
    
  }, 
  
  (rejResponse) => { //handle rejected state
    console.log("Promise Rejected", rejResponse)
    dogimage.innerText = 'Error in fetching Dog Image'
  }).catch((err) => {
    console.log("error occured")
  })
})



// var img = document.createElement("img");
// img.src = "matplotlib-grid-02.png";

// var div = document.getElementById("x");
// div.appendChild(img);


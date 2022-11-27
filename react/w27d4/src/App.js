
import { useState } from 'react';
import './App.css';

function App() {
const [field, setField] = useState({
  name:"",
  email:"",
  password:"",
  Address: ""
})
function submithandler(event){
  const {name,email,password,Address,value} = event.target.value
  setField(prevState =>({
    ...prevState,
[name]:value
  }))

}
function formsubmit(e){
  e.preventDefault()
console.log(field)
return window.alert("Submitted successfully")
}

  return (
    <>
      <form onSubmit={formsubmit}>
        <fieldset>
          <legend>Form in react</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={submithandler}
            value={field.name}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={submithandler}
            value={field.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={submithandler}
            value={field.password}
          />
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            name="Address"
            id="Address"
            onChange={submithandler}
            value={field.Address}
          />
          <button className="form--submit">Sign up</button>
        </fieldset>
      </form>
    </>
  );
}

export default App;

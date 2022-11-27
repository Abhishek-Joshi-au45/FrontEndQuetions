import React from 'react'

function MyForm() {
    return (
     <form className='form-group row container'>
      <label>Enter your name:
      <input type="text" className='form-control col' />
      </label>
      <label>Enter your Email:
        <input type="text" className='form-control col '/>
        </label>
        <label>Enter your Phone:
      <input type="number" className='form-control col'/>
      </label>
      <label>Enter your Address:
      <input type="text" className='form-control col'/>
      </label>
      <label>Enter your Password:
      <input type="text" className='form-control col'/>
      </label>
        <input type="submit" />
    </form>
  )
}


export default MyForm

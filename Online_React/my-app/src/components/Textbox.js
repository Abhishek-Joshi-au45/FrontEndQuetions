import React ,{useState} from 'react'

export default function Textbox(props) {
const handleupClick = (params) => {
    // console.log(`uppercase was clicked`)
    let newText = text.toUpperCase()
    setText(newText)
}

const handleloClick = (params) => {
    // console.log(`lowercase was clicked`)
    let newText = text.toLowerCase()
    setText(newText)
}

    
const handleOnChange = (event) => {
    // console.log("Change")
  setText(event.target.value)
}


const handleClearClick = (params) => {
    // console.log(`lowercase was clicked`)
    setText("")
}

const handleSpaceClick = (params) => {
    // console.log(`lowercase was clicked`)
    let newtext = text.replace(/\s+/g, ' ').trim()
    setText(newtext)
}


const [text, setText] = useState('');

  return (
    <div className='container'>
        <div className='container'>
            <h1>{props.heading}</h1>
            <textarea className="form-control" placeholder="Enter the Text" onChange={handleOnChange} value={text} ></textarea>
            {/* <input type="text" className="form-control" onChange={handleOnChange}  placeholder="Enter the Value you want to Uppercase" value={text} /> */}
            <button className='btn btn-primary mx-2' onClick={handleupClick}>Change to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleloClick}>Change to lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear the text</button>
            <button className='btn btn-primary mx-2' onClick={handleSpaceClick}>Remove extra space</button>
        </div>

        <div className='container my-3'>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} </p>
            <p>{0.008 * text.split(" ").length} min in reading </p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}


 import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpclick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Uppercase","success");
    }
    const handleLoclick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase","success");
    }
    const handleClearclick=()=>{
      let newText = "";
      setText(newText)
      props.showAlert("text is cleared","success");
  }
    const handleOnchange=(event)=>{
     //   console.log("on change")
        setText(event.target.value)
    }

   const handleCopy=()=>{
      let text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied to clipboard","success");
   } 

   const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Remove Extra spaces","success"); 
   }
    const [text, setText] = useState("");

 
  return (
<>            
   <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>    
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color : props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpclick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-1' onClick={handleLoclick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-1' onClick={handleClearclick}>Clear text</button>
    <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy text</button> 
    <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode ==='dark'?'white':'#042743'}}>
    <h2>your text summary </h2>
    <p>{text.split(" ").length} words  And {text.length} characters</p>
    <p>{0.008 *text.split("").length } Minutes read</p>
    



    </div>
    </>
  )
}

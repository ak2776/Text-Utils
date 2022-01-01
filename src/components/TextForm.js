import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Upper case was clicked: ' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase', 'success');
  }

  const handleLoClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase', 'success');
  }

  const handleClClick = ()=> {
    let newText = '';
    setText(newText);
    props.showAlert('Cleared the input area', 'success');
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to clipboard', 'success');
  }

  const handleOnChange = (event) => {
    // console.log('on change');
    setText(event.target.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extraspace cleared', 'success');
  }

  const[text, setText] = useState("");
  // text = 'new text';   Wrong way to change the state
  // setText("new text");   Right way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#021128':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="5"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>To Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>To Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClClick}>To Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove ExtraSpace</button>
    </div>

    <div className="container my-3" style={{backgroundColor: props.mode === 'dark'?'#021128':'white', color: props.mode === 'dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read.</p>
      <h3>Preview</h3>
      <p>{text.length > 0 ? text : 'Enter in text to preview'}</p>
    </div>
    </>
  );
}

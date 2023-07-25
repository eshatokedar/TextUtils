import React,{useState} from 'react'

export default function TextForm(props) {

  const handleupclick=()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
  }

  const handlelowclick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
  }

  const handlespeechclick=()=>{
    let msg = new SpeechSynthesisUtterance(text);
    msg.text=text;
    window.speechSynthesis.speak(msg);
    }

    const cancelSpeech=()=>{
      speechSynthesis.cancel()
  }
  
  const handleclearclick=()=>{
    let newtext='';
    setText(newtext);
  }
  const handleredo=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
  }

  const handleundo=()=>{
    setText(previousText);
  }

  const handlecopy=()=>{
    setPreviousText(text);
    navigator.clipboard.writeText(text);
  }

  const handleonchange=(event)=>{
    setText(event.target.value);
  }

const[text,setText]= useState('type here!');
const [previousText, setPreviousText] = useState('');

  return (
    <>

    <div>
      <h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control"value={text} onChange={handleonchange}id="myBox" rows="5"></textarea>
  </div>
  <button type="button" className="btn btn-secondary mx-1" onClick={handleupclick}>Convert to Upper Case</button>
    <button type="button" className="btn btn-secondary mx-1" onClick={handlelowclick}>Convert to Lower Case</button>
    <button type="button" className="btn btn-secondary mx-1" onClick={handlespeechclick}>Speech</button>
    <button type="button" className="btn btn-secondary mx-1" onClick={cancelSpeech}>Stop Speech</button>
    <button type="button" className="btn btn-secondary mx-1" onClick={handleundo}>Undo</button>
    <button type="button" className="btn btn-secondary mx-1" onClick={handleredo}>Redo</button>
    <button type="button" className="btn btn-secondary mx-1" onClick={handlecopy}>Copy to Clipboard</button>
    <button type="button" className="btn btn-secondary mx-1" onClick={handleclearclick}>Clear Text</button>
</div>
    
    <div className="container my-3">
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p> 
      {/* avg. time to read one word=0.008 mins */}
      <h2> Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

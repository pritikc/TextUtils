import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleLowerClick = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success")
    }
    const capitalize = () => {
        
        let firstchar = text.charAt(0); // storing the first char of the string
        let newText= firstchar.toUpperCase(); // converting that to uppercase
        setText(newText+text.slice(1)); // printing it with rest excluding the first char by using slice
        props.showAlert("Converted to capitalize!","success")

    }
    // const capitalFirstLetter = ()=>{
    //     let words = text.split(" ")
    //    let uppercaseword = ' '
    //     words.forEach(element => {
    //        uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    //     });
    //     setText(uppercaseword)
    // }
    
   
const handleLCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);    
    props.showAlert("Copied to clipboard!","success")
}
const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed!","success")
}

    const handleLClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Cleared Text!","success")
    }

    // const wordsCount =(text)=>{
    //     text = text.replace(/(^\s*)|(\s*$)/gi,"");
    //     text = text.replace(/[ ]{2,}/gi," ");
    //     text = text.replace(/\n /,"\n");
    //     return text.split(' ').length;
    // }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

// Declare a new state variable, which we'll call "text"
// const [text, setText] = useState('Enter text here...'); //with textbox text
const [text, setText] = useState('');

// text = "new text"; //Wrong way to change the state 
// setText("new text"); //Correct way to change the state 

  return (
    <>
    <div className="container" style={ {color : props.mode==='dark'?'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            {/* <label for="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text}
            onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey' : 'white' , color : props.mode==='dark'?'white' : '#042743' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-success mx-2 my-1" onClick={handleUpperClick}>Convert to Uppercase </button>
            <button className="btn btn-success mx-2 my-1" onClick={handleLowerClick}>Convert to Lowercase </button>
            <button className="btn btn-success mx-2 my-1" onClick={capitalize}>Convert to Capitalize </button>
            {/* <button className="btn btn-success mx-2 my-1" onClick={capitalFirstLetter}>Convert to CapitalFirstLetter </button> */}
            <button className="btn btn-success mx-2 my-1" onClick={handleLCopy}>Copy Text</button>
            <button className="btn btn-success mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-danger mx-2 my-1" onClick={handleLClearClick}>Clear Text </button>
    </div>
    <div className="container my-3" style={ {color : props.mode==='dark'?'white' : '#042743'}}>
    <h2>Your text summary</h2>
    <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Words and<b> {text.replace(/ /g,"").length}</b> Characters</p>
    <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length }</b> Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text : "Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  )
}

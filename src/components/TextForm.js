import React, { useState } from 'react'



export default function TextForm(props) {
    const handleupperclick = () => {
        // console.log("Uppercase was clicked"+text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handlelowerclick = () => {
        // console.log("Lowercse was clicked"+text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    const handleclearclick = () => {

        let newText = "";
        setText(newText)
        props.showAlert("Cleared the text", "success")
    }
    const handlespeakclick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handlereplaceclick = () => {
        let repval = prompt("Enter the word to be replaced:")
        let tobereplaced = new RegExp(repval, 'g');
 
        let toreplace = prompt("Enter the text that you want to replace with:");

        let newText = text.replace(tobereplaced, toreplace);
        setText(newText);
        props.showAlert("Reaplaced the text", "success")
    }
    const handlereverseclick = () =>{
        console.log("Text is Reversed");
       let newtext ="" ;
       for(let char of text){
         newtext = char+newtext;
       }
       setText(newtext)
       props.showAlert("Reversed the text", "success")
       }

       const handleCapitalize = () => {
        let s1 = "";
        let newText = text + " ";
        for (let index = 0; index < newText.length;) {
          let i = newText.indexOf(' ', index);
          let word = newText.substring(index, i);
          index = i + 1;
          if (word === "") {
            continue;
          }
          s1 += CapitalizeFirstLetter(word) + " ";
        }
        const s2 = s1.trim();
        setText(s2);
        props.showAlert("Capitalized first letter of words", "success")
      }
      function CapitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      const copyToClipboard = () => {
     
        navigator.clipboard.writeText(text)
          .then(() => {
            console.log(text + " copied ");
          })
          .catch((error) => {
            console.error('Error copying text: ', error);
          });
          props.showAlert("Copied the text", "success")
      }
      
    // for typing we have to use onchange

    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <h1><i>{props.heading}</i></h1>
                <div className="my-3">
                    <label htmlFor="myText" className="form-label">Textarea</label>
                    <textarea className="form-control" value={text}
                        onChange={handleOnChange}
                        id="myText" rows="8"></textarea>
                </div>
                <button className="btn btn-info mx-2 my-2" onClick={handleupperclick}>
                    Convert to uppercase
                </button>
                <button className="btn btn-info mx-2 my-2" onClick={handlelowerclick}>
                    Convert to lowercase
                </button>
                <button className="btn btn-info mx-2 my-2" onClick={handleclearclick}>
                    Clear the text
                </button>
                <button className="btn btn-info mx-2 my-2" onClick={handlespeakclick}>
                    Speak
                </button>
                <button className="btn btn-info mx-2 my-2" onClick={handlereplaceclick}>
                    Replace any word
                </button>
                <button className="btn btn-info mx-2 my-2" onClick={handlereverseclick}>
                    Reverse words
                </button>
                <button className="btn btn-info mx-2 my-2" onClick={handleCapitalize}>
                    Capitalize first letter
                </button>
                <button className="btn btn-info mx-2 my-2" onClick={copyToClipboard}>
                    Copy to clipboard
                </button>
            </div>
            <div className="container my-4">
                <h3>Your text summary</h3>
                <p><u>{text.split(" ").length} Words, {text.length} Characters</u></p>
                <p><u>{0.008 * text.split(" ").length} minutes read</u></p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

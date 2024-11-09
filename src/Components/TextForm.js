import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUPClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        
    }

    const handleCClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase", "success");
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Text cleared", "success");
    }
    
    const handleCopy = () => {
    
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied", "success");
    }

    const RemoveExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const wordCounter = (text) => {
        let words = text.split(" ");
        return words.filter(word => word.trim() !== "").length;
    }

    const charCounter = (text) => {
        let charCount = 0;
        for(let i = 0; i < text.length; i++){
            if(text[i] !== " "){
                charCount++;
            }
        }
        return charCount;
    }

    return (

        <>
            <div>
                <div className="container">
                    <h1>{props.formhead}</h1>
                    <div className="form-group">
                        <label htmlFor="myBox"></label>
                        <textarea className="form-control" id="myBox" rows="3" style={{backgroundColor: props.mode === 'dark' ? `grey` : `white` , color: props.mode === `dark` ? `white` : `grey`}} value={text} onChange={handleOnChange}></textarea>
                    </div>
                    <button className="btn btn-primary my-3" onClick={handleUPClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleCClick} >Convert to Lowercase</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleCopy} >Copy</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={RemoveExtraSpace} >Remove Extra Spaces</button>
                    <button className="btn btn-danger my-3 mx-3" onClick={handleClearClick} >Clear</button>
                </div>
            </div>
            <div className="container">
                <h1>Your text summary</h1>
                <p>{wordCounter(text)} words and {charCounter(text)} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

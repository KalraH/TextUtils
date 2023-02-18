import PropTypes from 'prop-types';
import React, {useState} from 'react';

export default function TextForm(props) 
{

    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase !!", "warning");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase !!", "warning");
    };

    const handleRemoveSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All extra spaces Removed !!", "success");
    };
    
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Content coppied to ClipBoard !!", "primary");
    };

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("All text Removed !!", "info");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    let textLen = text.split(/\s+/).filter(i => i).length;
    return (
        <>
            <div className="container" style= {{ color: (props.mode === 'dark') ? 'white' : 'black' }}>
                <h1 className='mb-2'>{props.heading}</h1>
                <textarea 
                    className={`form-control mb-3 text${ (props.mode === 'light') ? 'Light' : 'Dark'}` } 
                    value={text} 
                    style= {{
                        backgroundColor: (props.mode === 'dark') ? '#0a3d6f' : 'white',
                        color: (props.mode === 'light') ? 'black' : 'white' }} 
                    onChange={handleOnChange} 
                    id="myBox" 
                    rows="8" 
                    placeholder='Enter text here...'>
                </textarea>

                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>Convert to ClipBoard</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            
            <div className="container my-3" style= {{ color: (props.mode === 'light') ? 'black' : 'white' }}>
                <h2>Your text Summary...</h2>
                <p>{textLen} Words & {text.length} Characters</p>
                <p>{0.008 * textLen} Minutes read</p>
                <h3>Preview...</h3>
                <p>{ (text.length > 0) ? text : "Nothing to Preview..." }</p>
            </div>
        </>
    )
}

TextForm.prototype = { 
    heading: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    showAlert: PropTypes.func.isRequired
}

TextForm.defaultProps = { 
    heading: 'Heading of Box'
}
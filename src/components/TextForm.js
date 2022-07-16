import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.toggleAlert(`Text has been converted to UPPERCASE`, 'success')
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.toggleAlert(`Text has been converted to UPPERCASE`, 'success')
    }
    const handleUpperChange = (event) => {
        setText(event.target.value)


    }

    const handleClearClick = () => {
        setText('')
        props.toggleAlert(`Text has been cleared`, 'success')
    }
    
    const handleToggleClick = () => {
        let words = text.toLowerCase().trim().split(' ');
        words.forEach((word,index) => {
            words[index] = word[0].toUpperCase() + word.slice(1);
        });

        let result = words.join(' ');
        console.log(result);
        setText(result)
        
    }


    const [text, setText] = useState('')

    return (
        <>
            <div className='container my-2'>
                <h3 className={`h2 text-center text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h3>
                <div className="my-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'#212529', color:props.mode==='light'?'black':'white'}}  onChange={handleUpperChange} value={text} id="mybox" rows="8"></textarea>
                </div>
                <div className="text-center my-3">
                    <div className="row">
                        <div className="col-3">
                            <button className={`btn btn-block btn-${props.mode==='light'?'secondary':'light'}`} onClick={handleUpperClick} >Convert To Upper Case</button>
                        </div>
                        <div className="col-3">
                            <button className={`btn btn-block btn-${props.mode==='light'?'secondary':'light'}`} onClick={handleLowerClick} >Convert To Lower Case</button>
                        </div>
                        <div className="col-3">
                            <button className={`btn btn-block btn-${props.mode==='light'?'secondary':'light'}`} onClick={handleToggleClick} >Convert To Toggle Case</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-danger mx-2" onClick={handleClearClick} >Clear</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <h3 className={`text-center text-${props.mode==='light'?'dark':'light'}`}>
                    Your Text Summary
                </h3>
                <ul className="list-group list-group-flush" style={{backgroundColor: props.mode==='light'?'white':'#212529'}} >
                    <li className="list-group-item">
                        <strong>Words:</strong> {text.trim().split(' ').length}
                    </li>
                    <li className="list-group-item">
                        <strong>Characters:</strong> {text.trim().length}
                    </li>
                    <li className="list-group-item">
                        <strong>Time to read:</strong> {text.trim().split(' ').length * 0.04} minutes
                    </li>
                </ul>
            </div>
            <div className="container my-2">
                <h3 className={`text-center text-${props.mode==='light'?'dark':'light'}`}>
                    Preview
                </h3>
                <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.length>0?text:"Enter Something to preview here"}</p>
            </div>
        </>

    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: 'Enter Text to analyze'
}
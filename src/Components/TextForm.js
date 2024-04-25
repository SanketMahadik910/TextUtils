import React, { useState } from "react";

export default  function TextForm(props)
{
    const [text , setText] = useState("");
function hadleCopy()
{
  var text = document.getElementById("Box1"); 
  text.select();
  navigator.clipboard.writeText(text.value);
 props.showalert('Text Copied Successfully','success');
  

}
    
return(
  
    <>
  
<div className="container mb-3" style={{color:props.mode==='dark' ? 'white' : '#0a1730'}}>
<h1>{props.heading}</h1>
  <textarea className="form-control" id="Box1" rows="8" value={text}  onChange={(element)=> setText(element.target.value)} style={{backgroundColor:props.mode==='dark' ? 'grey' : 'white' , color:props.mode==='dark' ? 'white' : '#0a1730'}}></textarea>
</div>
 <button className='btn btn-primary mx-1 my-1' onClick={()=>setText(text.toUpperCase() , props.showalert('Upper case has been enabled' , 'success'))}>UpperCase</button>
 <button className="btn btn-primary mx-1 my-1" onClick={()=>setText(text.toLocaleLowerCase() , props.showalert('Lower case has been enabled' , 'success'))}>LowerCase</button> 
 <button className="btn btn-primary mx-1 my-1" onClick={hadleCopy}>Copy Text</button>
 <button className="btn btn-primary mx-1 my-1" onClick={()=>setText("" , props.showalert('Text cleared successfully','success'))}>Clear Text</button>
<div className="container" style={{color:props.mode==='dark' ? 'white' : '#0a1730'}}>
<h2>Your text summary</h2>
<p>{text.split(' ')
            .filter(function(n) { return n != '' })
            .length} Words and {text.replace(/ /g, "").length} characters</p>
<p>{0.008 * text.split(' ')
            .filter(function(n) { return n != '' })
            .length} Minutes  read</p>

<h3>Your text is below</h3>
<p>{text.length > 0 ? text : 'Nothing to preview!'}</p>

</div>
</>

); 
}


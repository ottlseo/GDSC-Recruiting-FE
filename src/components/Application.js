import React from "react";
import './Application.css'

function calc(){
    //document.getElementById('content_length').value = document.getElementById('content').value.length;
    var c = document.getElementById('content');
    var cl = document.getElementById('content_length');
    if(c != null && cl != null){
        cl.value = c.value.length;
    } else{
        cl.value = 0;
    }
    
}
function Application({question}){ 
    // <textarea id="content" onKeyDown={calc()} onKeyUp={calc()} onKeyPress={calc()}></textarea>
    return ( 
         <div className="application">
             <p className="application_question">{question}</p>
             <textarea id="content" onKeyDown={calc()} onKeyUp={calc()} onKeyPress={calc()}></textarea>
             <br/>
             <input id="content_length" value="0" readOnly></input>
         </div>
    )
};

export default Application;
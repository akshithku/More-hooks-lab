import React, { useState, useReducer, useRef } from "react";
import '../App.css';
import { initialState, reducer } from "./recuder";
const InputText = () => {
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, showText] = useState(true);
  const focus = useRef()


 

  const input =(index) => {
    
      if (text === "" || text === " "|| text ==="  " ){
return;
      } 
      dispatch({
        type: "push",
        textToBePrinted: {
          id:index,
          text
        }
      });
      setText("");
    
  };

  const toggle=()=>{
    
        showText(!show)
      
  }

  const foc=()=>{
    focus.current.focus();
  }

  return (
    <>
      <input
        type="text" value={text} ref={focus}onChange={e => setText(e.target.value)} />
      <button onClick={input}>+</button>

      {
        state.item.map((item, index)=> (
          <div className="list" key={item.id}>
           {show &&<h2 style={{ marginRight: 20 }}>{item.text}</h2>}{!show && <h2>Content is hidden</h2>}
            <button className="toggle" onClick={()=>toggle()}>Toggle</button>
            
            
          </div>
        ))
      }
      <div>
      <button id="aaa" onClick={foc}>Back To Top</button>
      </div>
    </>
  );
};



export default InputText;
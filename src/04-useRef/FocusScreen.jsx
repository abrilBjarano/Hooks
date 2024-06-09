import { useRef } from "react";

export const FocusScreen = () => {

   const inputRef = useRef();

   const onClick = () => {
      inputRef.current.select();
   };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input 
         ref={ inputRef }
         type="text"
         placeholder="Enter your name"
         className="form-control"
         />

      <div 
         className="btn btn-primary mt-2"
         onClick={ onClick }
      > Set focus
      </div>
    </>
  )
}

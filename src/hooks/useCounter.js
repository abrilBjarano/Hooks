import { useState } from "react";

const useCounter = ( initialValue = 10 ) => {

   const [counter, setCounter] = useState( initialValue );

   return {
      counter,
   }
};
import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

  const [counter, setCounter] = useState( 10 );

  const incrementFather = useCallback(
    () => {
      setCounter( (value) => value + 1 );
    },
    [],
  )
  // const incrementFather = () => {
  //   setCounter( 1 + counter );
  // };

  useEffect(() => {
  }, [ incrementFather ]);
  

  return (
    <>
      <h1>useCallback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={ incrementFather } />
    </>
  )
}
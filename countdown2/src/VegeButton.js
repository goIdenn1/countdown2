import React from "react";
const vegetarianButton = (props) => {
  return (
    <>
      <p>{props.name}: </p>
       /*add if statement to toggle button text*/
      <button onClick={() => props.onClick()}>Vegetarian?</button>
    </>
  )
}
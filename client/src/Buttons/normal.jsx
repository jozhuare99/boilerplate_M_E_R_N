import React from 'react'
function MyButton() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }
export default function normal() {
  return (
    MyButton
  )
}

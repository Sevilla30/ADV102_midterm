import React, { useState } from 'react';

function Stack() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePush = () => {
    if (!inputValue.trim()) {
      alert('Please enter a valid integer.');
      return;
    }
    const newValue = parseInt(inputValue);
    setStack(prevStack => {
      const newStack = new Array(prevStack.length + 1);
      for (let i = 0; i < prevStack.length; i++) {
        newStack[i] = prevStack[i];
      }
      newStack[prevStack.length] = newValue;
      return newStack;
    });
    setInputValue('');
  };

  const handlePop = () => {
    if (stack.length === 0) {
      alert('Stack is empty');
      return;
    }
    const newStack = new Array(stack.length - 1);
    for (let i = 0; i < stack.length - 1; i++) {
      newStack[i] = stack[i];
    }
    setStack(newStack);
  };

  return (
    <div>
      <h1>Stack of Integers</h1>
      <div>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Enter an integer" 
        />
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
      </div>
      <div>
        {stack.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    </div>
  );
}

export default Stack;

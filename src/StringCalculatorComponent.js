import React, { useState } from 'react';

const StringCalculatorComponent = () => {
  const [input, setInput] = useState('');
  console.log(input);

  return (
    <div>
      <h1>String Calculator Kata</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
      <button >Calculate</button>
    </div>
  );
};

export default StringCalculatorComponent;

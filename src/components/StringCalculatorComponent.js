import React, { useState } from 'react';
import AddNumbers from '../utils/AddNumbers';

const StringCalculatorComponent = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const res = AddNumbers(input);
    console.log(res);
    setResult(res);
  }

  return (
    <div>
      <h1>String Calculator Kata</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <div>Result: {result}</div>}
    </div>
  );
};

export default StringCalculatorComponent;

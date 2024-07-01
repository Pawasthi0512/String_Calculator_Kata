import React, { useState } from 'react';
import AddNumbers from '../utils/AddNumbers';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
  color: #333;
`;

const Error = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
  color: red;
`;

const StringCalculatorComponent = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      setError(null);
      const res = AddNumbers(input.replace(/\\n/g, '\n'));
      setResult(res);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <Container>
      <h1>String Calculator Kata</h1>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
      <Button onClick={handleCalculate}>Calculate</Button>
      {result !== null && <Result>Result: {result}</Result>}
      {error && <Error >Error: {error}</Error>}
    </Container>
  );
};

export default StringCalculatorComponent;

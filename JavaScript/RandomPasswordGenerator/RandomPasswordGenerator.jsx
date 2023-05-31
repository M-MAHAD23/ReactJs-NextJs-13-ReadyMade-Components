import React, { useState } from 'react'
import { h2,
  Container,
  ResultContainer,
  Result,
  ClipboardButton,
  Button,
  LargeButton,
  Setting, } from './RandomPasswordGenerator.styled'

function RandomPasswordGenerator() {
  const [password, setPassword] = useState('');

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  const handleClipboardClick = () => {
    if (!password) {
      return;
    }
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  const handleGenerateClick = () => {
  
    const length = document.getElementById('length').value;
    const hasLower = document.getElementById('lowercase').checked;
    const hasUpper = document.getElementById('uppercase').checked;
    const hasNumber = document.getElementById('numbers').checked;
    const hasSymbol = document.getElementById('symbols').checked;

    setPassword(generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length));
  };

  const generatePassword = (lower, upper, number, symbol, length) => {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
      return '';
    }

    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
  };

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  return (
    <Container>
    <h2 style={{ color: "whitesmoke",}}>Password Generator</h2>
    <ResultContainer>
      <Result id="result">{password}</Result>
      <ClipboardButton placeholder='Copy' onClick={handleClipboardClick}>
        <i className="far fa-clipboard"></i>
      </ClipboardButton>
    </ResultContainer>
    <div className="settings">
      <Setting>
        <label style={{ color: "whitesmoke",}}>Password Length</label>
        <input type="number" id="length" min="8" max="20" defaultValue="20" />
      </Setting>
      <Setting>
        <label style={{ color: "whitesmoke",}}>Include uppercase letters</label>
        <input type="checkbox" id="uppercase" defaultChecked />
      </Setting>
      <Setting>
        <label style={{ color: "whitesmoke",}}>Include lowercase letters</label>
        <input type="checkbox" id="lowercase" defaultChecked />
      </Setting>
      <Setting>
        <label style={{ color: "whitesmoke",}}>Include numbers</label>
        <input type="checkbox" id="numbers" defaultChecked />
      </Setting>
      <Setting>
        <label style={{ color: "whitesmoke",}}>Include symbols</label>
        <input type="checkbox" id="symbols" defaultChecked />
      </Setting>
    </div>

    <LargeButton id="generate" onClick={handleGenerateClick} style={{ color: "whitesmoke",}}>
      Generate Password
    </LargeButton>
  </Container>
  );
}

export default RandomPasswordGenerator
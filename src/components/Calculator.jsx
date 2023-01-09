import React, { useState } from 'react';

function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(null);
  const [operator, setOperator] = useState(null);
  const [oldLastNum, setOldLastNum] = useState(null);
  const [isResultClicked, setIsResultClicked] = useState(false);

  function inputNum(e) {
    if (isResultClicked) {
      setOldNum(null);
      setOperator(null);
      setOldLastNum(null);  
    }

    if(num === 0 || isResultClicked) {
      setIsResultClicked(false);
      setOldLastNum(null);
      setNum(e.target.value);
      return;
    }    

    setNum(num + e.target.value);
  }

  function clear() {
    setNum(0);
    setOperator(null);
    setOldNum(null);
    setOldLastNum(null);
  }

  function porcentage() {
    setNum(num / 100);
  }

  function changeSign() {
    if(num > 0) {
      setNum(-num);
      return;
    }

    setNum(Math.abs(num));
  }

  function operatorHandler(e) {
    const operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    setIsResultClicked(true);
    if(operator === '/') {
      setOldLastNum(num);
      setNum(oldNum / num);
    } else if(operator === 'X') {
      setOldLastNum(num);
      setNum(oldNum * num);
    } else if (operator === '-') {
      setOldLastNum(num);
      setNum(oldNum - num);
    } else if (operator === '+') {
      setOldLastNum(num);
      setNum(Number(oldNum) + Number(num));
    }
  }

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Calculadora</h1>
      <div className="calculator">
        <div className='result'>
          <div className="old-values-container">
            <span className="old-value-left">{oldNum}</span>
            <span className="operator">{operator}</span>
            <span className="old-value-right">{oldLastNum}</span>
          </div>
          <span className='result-text'>{num}</span>
        </div>
        <div className="buttons">
          <button onClick={clear} className="green">AC</button>
          <button onClick={changeSign} className="green"><i className="fa-solid fa-plus-minus"></i></button>
          <button onClick={porcentage} className="green"><i className="fa-solid fa-percent"></i></button>
          <button onClick={operatorHandler} value='/' className="red"><i className="fa-solid fa-divide"></i></button>
          <button onClick={inputNum} value={7}>7</button>
          <button onClick={inputNum} value={8}>8</button>
          <button onClick={inputNum} value={9}>9</button>
          <button onClick={operatorHandler} value='X' className="red"><i className="fa-solid fa-xmark"></i></button>
          <button onClick={inputNum} value={4}>4</button>
          <button onClick={inputNum} value={5}>5</button>
          <button onClick={inputNum} value={6}>6</button>
          <button onClick={operatorHandler} value='-' className="red"><i className="fa-solid fa-minus"></i></button>
          <button onClick={inputNum} value={1}>1</button>
          <button onClick={inputNum} value={2}>2</button>
          <button onClick={inputNum} value={3}>3</button>
          <button onClick={operatorHandler} value='+' className="red"><i className="fa-solid fa-plus"></i></button>
          <button onClick={inputNum} value={0} className="zero">0</button>
          <button onClick={inputNum} value={'.'}>.</button>
          <button onClick={calculate} className="red"><i className="fa-solid fa-equals"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
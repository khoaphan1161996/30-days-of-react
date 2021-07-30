import React from "react";
import "./style.css";

import Header from "../HeaderNumberGenerator";
import NumberItem from "../NumberItem";

export default function NumberGenerator() {
  const number0To31 = () => {
    const numbers = [];
    for (let i = 0; i <= 31; i++) {
      numbers.push(i);
    }
    let result = numbers.map((number) => {
        let style 
      if (number % 2 === 0){
        style = 'green'
      }
      else {
          style = 'yellow'
      }
      if(checkPrimeNum(number) === true) {
        style = 'red'
      }
      return <NumberItem number={number} key={number} style={style}/>;
    });
    return result;
  };

  function checkPrimeNum(n) {
    let flag = true;

    if (n < 2) {
      flag = false;
    } else {
      for (let i = 2; i < n - 1; i++) {
        if (n % i === 0) {
          flag = false;
          break;
        }
      }
    }

    return flag;
  }

  return (
    <div className="number">
      <Header />
      <ul className="number-list">{number0To31()}</ul>
    </div>
  );
}

import { Button } from '@mui/material';
import React, { useState } from 'react';
import './formApp.css';

const data = [7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x',  ];


function FormApp() {
  // const [darkTwo, setDarkTwo] = useState(false);
  // const [darkThree, setDarkThree] = useState(false);

  // function darkHandle(num) {
  //   if(num === 1){
  //     setDarkTwo(false);
  //     setDarkThree(false);
  //   }else if(num === 2){
  //     setDarkTwo(true);
  //     setDarkThree(false);
  //   }else if(num === 3){
  //     setDarkTwo(false);
  //     setDarkThree(true);
  //   }
  // }

  // ${ darkTwo ? 'darkTwo' : null} 
  // ${ darkThree ? 'darkThree' : null}`}
  return (
    <div classname="container">
      <div classname="CalculatorApp">
        <header classname="header">
          <h2> calc </h2>
          <div classname="header_theme">
            <span> THEME </span>
            <div classname="header_icon">
              <div classname="num_icons">
                <span classname="one">1</span>
                <span classname="two">2</span>
                <span classname="three">3</span>
              </div>
              <div classname="toggle">
                <span classname="toggle_icon">
                </span></div>
            </div>
          </div>
        </header>
        <main>
          <form classname="form">
            <div classname="formTitle">
              <h1>12345 </h1>
            </div>
            <div classname="form_menu">
              <button>
                <span>2</span>
              </button>
              <div classname="result">
                <button>
                  <span>Reset</span>
                </button>
                <button>
                  <span>=</span>
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>

  )
}

export default FormApp;
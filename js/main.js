const newArr = [];
for( let i = 1; i < 10; i++) {
    newArr.push(i)
};

let formMenuDiv = document.querySelector('._menu');
let value = document.querySelector('#Value');

newArr.forEach((item) => {
    let button = document.createElement('button');

    button.innerHTML = `<span onClick={addHandlerItems(${item})}> ${item}</span>`;
    formMenuDiv.appendChild(button);
});


let valOne = [];
let valTwo = [] ;
let correctPlus = true;
let correctMinus = true;
let correctKup = true;
let correctBul = true;


function addHandlerItems(i) {
    valOne.push(i);
    value.textContent = valOne.join('');
}

function changeHandle(id) {
    if(id == '+') {
        valTwo.push(value.textContent);
        valOne = [];
        value.textContent = '';

        correctPlus = true;
        correctKup = false;
        correctBul = false;
        correctMinus = false;

    }else if(id == '-') {
        valTwo.push(value.textContent) ;
        valOne = [];
        value.textContent = '';

        correctPlus = false;
        correctKup = false;
        correctBul = false;
        correctMinus = true;
    }else if(id == '*') {
        valTwo.push(value.textContent) ;
        valOne = [];
        value.textContent = '';

        correctPlus = false;
        correctKup = true;
        correctBul = false;
        correctMinus = false;
    }else if(id == '/') {
        valTwo.push(value.textContent) ;
        valOne = [];
        value.textContent = '';

        correctPlus = false;
        correctKup = false;
        correctBul = true;
        correctMinus = false;
    }
}

function resultHandle( ) {
    if(correctPlus) {
        if(valTwo.length >= 1) {
            value.textContent = +value.textContent + +valTwo[0];
        };
        valOne = [];
        valTwo = [];
    }else if(correctMinus) {
        if(valTwo.length >= 1) {
            value.textContent = +valTwo[0] - +value.textContent;
        };
        valOne = [];
        valTwo = [];
    }else if(correctKup) {
        if(valTwo.length >= 1) {
            value.textContent = +valTwo[0] * +value.textContent;
        };
        valOne = [];
        valTwo = [];
    }else if(correctBul) {
        if(valTwo.length >= 1) {
            value.textContent = +valTwo[0] / +value.textContent;
        };
        valOne = [];
        valTwo = [];
    }
};

function resHandler() {
    valOne = [];
    valTwo = [];
    value.textContent = 0;
};

function delHandler() {
  let num = value.textContent.split('');

  num.pop();
  valOne = num;

  value.textContent = num.join('');
};


Body = document.querySelector('body');

function darkHandle(type) {
    if(type == 'darkOne') {
        Body.className = '';
    }else if(type == 'darkTwo') {
        Body.className = ' darkTwo';
    }else if(type == 'darkThree') {
        Body.className = ' darkThree';
    }
}


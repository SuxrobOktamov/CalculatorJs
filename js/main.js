
const newArr = [];

for( let i = 1; i < 10; i++) {
    newArr.push(i)
};

let formMenuDiv = document.querySelector('._menu');


newArr.forEach((item) => {

    let button = document.createElement('button');
    button.innerHTML = `${item}`;

    formMenuDiv.appendChild(button);

})
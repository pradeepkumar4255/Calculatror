// let inputBox = document.getElementById('inputBox')
// let buttons = document.querySelectorAll('button')

// let string = ''

// buttons.forEach(element =>{ 
//     element.addEventListener('click', (b)=>{
//         if(b.target.innerText == '='){
//             string = String(eval(string))
//             inputBox.value = string;
//         }
//         else if(b.target.innerText == 'AC'){
//             string = ''
//             inputBox.value = string;
//         }
//         else if (b.target.innerText == 'DEL'){ 
//             string = string.substring(0,string.length-1)
//             inputBox.value = string;
//         }
//         else if(b.target.id == 'plusMinus'){
//             string = String(-eval(string))
//             inputBox.value = string;
//         }
//         else{
//             string += b.target.innerText
//             inputBox.value = string
//         }
//     })
// })



// let inputBox = document.getElementById('inputBox')
// let buttons = document.querySelectorAll('button')
// let string = ''
// buttons.forEach(element =>{
//     element.addEventListener('click', (b)=>{
//         if(b.target.innerText == '='){
//         //  try{string = String(eval(string))
//         //     inputBox.value = string;}
//         //     catch(error){
//         //         inputBox.value='Syntax error';
//          string = string == '' ? '0': string;
//          try{
//             string = String(eval(string))
//          inputBox.value = string;
//          }
//          catch(error){
//             inputBox.value = "Error(Press AC)"
//          }
//         }
//         //  else if(b.target.innerText == 'AC'){
//         else if(b.target.innerText == 'AC'){
//             string = ''
//             inputBox.value = string;
//         }
//         else if(b.target.innerText == 'DEL'){
//             string = string.substring(0,string.length-1)
//             inputBox.value = string;
//         }
//         else if(b.target.id == 'plusMinus'){
//             string = String(-eval(string))
//             inputBox.value = string;
//         }
//         else{
//             string += b.target.innerText
//             inputBox.value = string
//         }
//     })
// })

let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = '';

buttons.forEach(element => {
  element.addEventListener('click', (b) => {
    if (b.target.innerText === '=') {
      string = string === '' ? '0' : string;
      try {
        // Check if the last character is a percentage sign and calculate accordingly
        if (string.endsWith('%')) {
          string = String(parseFloat(string.slice(0, -1)) / 100);
        } else {
          string = String(eval(string));
        }
        inputBox.value = string;
      } catch (error) {
        inputBox.value = "Error (Press AC)";
      }
    } else if (b.target.innerText === 'AC') {
      string = '';
      inputBox.value = string;
    } else if (b.target.innerText === 'DEL') {
      string = string.substring(0, string.length - 1);
      inputBox.value = string;
    } else if (b.target.id === 'plusMinus') {
      string = String(-eval(string));
      inputBox.value = string;
    } else {
      string += b.target.innerText;
      inputBox.value = string;
    }
  });
});


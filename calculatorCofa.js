//function FLECHA = () => { }
//por lad dudad ponemos (parseInt) porque le pediremos los datos por un prompt
const add = (nomb1, nomb2) => {
  return parseInt(nomb1) + parseInt(nomb2);
}
const substract = (nomb1, nomb2) => {
  return parseInt(nomb1) - parseInt(nomb2);
}
const division = (nomb1, nomb2) => {
  return parseInt(nomb1) / parseInt(nomb2);
}
const multiplication = (nomb1, nomb2) => {
  return parseInt(nomb1) * parseInt(nomb2);
}

//alert('what operation would you like to do?');
let operation = prompt ('1: add,  2: substract,  3: division,  4: multiplication');

if(operation == 1) {
  let numero1 = prompt('ADD: Enter First number pleases?');
  let numero2 = prompt('ADD: Enter Second number pleases?');
   resultado = add(numero1,numero2);
   console.log(`the total of add is ${resultado}`)
}
else if (operation == 2) {
  let numero1 = prompt('SUBSTRACT: Enter First number pleases?');
  let numero2 = prompt('SUBSTRACT: Enter Second number pleases?');
   resultado2 = substract(numero1,numero2);
   console.log(`The total of Substract is: ${resultado2}`)
}
else if (operation == 3) {
  let numero1 = prompt('DIVISION: Enter First number pleases?');
  let numero2 = prompt('DIVISION: Enter Second number pleases?');
   resultado3 = division(numero1,numero2);
   console.log(`The total of division is: ${resultado3}`);
}
else if (operation == 4) {
  let numero1 = prompt('MULTIPLICATION: Enter First number pleases?');
  let numero2 = prompt('MULTIPLICATION: Enter Second number pleases?');
   resultado4 = multiplication(numero1,numero2);
   console.log(`The total of multiplication is: ${resultado4}`);
}
else {
  alert('SORRY, The operation was not found!')
}



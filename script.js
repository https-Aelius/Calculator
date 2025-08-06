let currentInput='';
let currentOutput='';
let previousInput='';
let currentOperation='';
let storageString=[''];

function appendNumber(number){ //generating code for outputting the numbers onto the screen 
    currentInput += number; //same as: currentInput = currentInput + number;
    document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`; //order is important
    //displaying the numbers
}

function appendOperation(operation){
    if (currentInput === '') return; //if there is no input, do nothing
    if (currentOutput !== '') {
        calculate(); //if there is an output, calculate before appending the operation
    }

    //logical error here!!

    currentOperation = operation; //setting the current operation
    previousInput = currentInput; //setting the previous input
    currentInput = '';
    document.getElementById('display').value = `${previousInput} ${currentOperation}`;

}

function calculate(){

    if (currentInput === '' && previousInput ==='') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);


    switch(currentOperation){
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev*current;
            break;
        case '/':
            if (current === 0){
                alert('Error: Cannot divide a by zero');
                return;
            }
            else{
                result = prev/current;
            }
            break;
            
        default:
            return; //if there is no operation, then do nothing
    }


    currentOutput = result.toFixed(); //converting the result into a string
    document.getElementById('display').value = currentOutput;//displaying the result
    console.log('output');

    currentOperation = '';
    currentInput = '';

}

function clearDisplay(){
    currentInput = '';
    currentOutput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').value = '';
    console.log('clearDisplay has no syntax errors');
}

function backDisplay(){
    currentInput = currentInput.slice(0,-1);
    document.getElementById('display').value= `${currentInput} ${previousInput} ${currentOperation}`;
}
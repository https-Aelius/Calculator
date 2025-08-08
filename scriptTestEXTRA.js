let currentInput='';
let currentOutput='';
let previousInput='';
let currentOperation='';
let storageNumber='';
let storageOperation='';
let negativeFlag = false;

function appendNumber(number){ //generating code for outputting the numbers onto the screen
    if (negativeFlag) {
        currentInput += number;
        currentInput = currentInput*-1;
        document.getElementById('display').value = `${currentInput}`;
        negativeFlag = false; //reset the negative flag after appending the number
    }
    else{
        currentInput += number; //same as: currentInput = currentInput + number;
        document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`; //order is important
        //displaying the numbers
    } 
    
}

function appendOperation(operation){

    if (operation === '-' && storageOperation === '' && storageNumber==='' && currentInput === '') { 
        negativeFlag = true;
        console.log('Negative If statement executed');
    }

    if (operation === '-' && storageOperation ==='x'){
        negativeFlag = true;
        currentOperation = storageOperation;
        previousInput = storageNumber;
        currentInput = '';

        document.getElementById('display').value=`${previousInput} ${storageOperation} ${currentOperation}`;
        
    }

    if (currentInput === '' && storageNumber !== '') {
        currentOperation = operation;
        storageOperation = operation; //storing the operation
        previousInput = storageNumber; //NEED THIS

        currentInput = ''; //reset currentInput

        document.getElementById('display').value = `${previousInput} ${currentOperation}`; 
        console.log('No input if statement executed');

    }

    else{
        currentOperation = operation; //setting the current operation
        storageOperation = operation;
        previousInput = currentInput; //setting the previous input
        currentInput = '';
        document.getElementById('display').value = `${previousInput} ${currentOperation}`;
        console.log('else statement executed');
        console.log('Storage location for else statement is:', storageOperation);

    }

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
        case 'x':
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

    currentOutput = result.toString(); //converting the result into a string
    document.getElementById('display').value = currentOutput;//displaying the result
    storageNumber = result; //storing the calculation in the storageString 
    console.log('Storage operation for calculate is', storageOperation);
    currentOperation = '';
    currentInput = '';

}

function clearDisplay(){
    currentInput = '';
    currentOutput = '';
    previousInput = '';
    currentOperation = '';
    storageNumber = '';
    storageOperation = '';
    negativeFlag = false; 
    document.getElementById('display').value = '';

}

function backDisplay(){
    currentInput = currentInput.slice(0,-1);
    document.getElementById('display').value= `${currentInput} ${previousInput} ${currentOperation}`;
}
let currentInput='';
let currentOutput='';
let previousInput='';
let currentOperation='';
let storageString='';
let negativeFlag = false;
let sign = false; //false = positive, true = negative

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

function toggleSign(){
    //works!!!!!
    sign = sign ? false : true; //toggle the true and false after every press VERY IMPORTANT LINE OF CODE 
    document.getElementById('positive-negative').innerHTML = sign ? '-' : '+'; //If the sign is true then display negative, vice versa.
    console.log('sign toggled to: ', `${sign}`);
    if (sign){
        appendNumber('-'); //if the sign is true, then append a negative sign
    }
    else{
        //if the sign is false, then do nothing
        //this is because we don't want to append a positive sign
        //the positive sign is implicit
        console.log('Positive sign not appended');
    }
    sign = false; //reset the sign after appending the number
    document.getElementById('positive-negative').innerHTML = '+/-';//resetting display of the sign button
}

//Now doing toggleTens function Date: 11/10/25
function toggleTens(){
    
}

function appendOperation(operation){

    if (operation === '-' && previousInput === '' && storageString === '') {
        negativeFlag = true;
        console.log('Negative If statement executed');
    }

    if (currentInput === '' && storageString !== '') {
        currentOperation = operation;
        previousInput = storageString; //if there is no input, set previousInput to storageString

        currentInput = ''; //reset currentInput



        document.getElementById('display').value = `${previousInput} ${currentOperation}`; 
        console.log('No input if statement executed');

    }

    else{
        currentOperation = operation; //setting the current operation
        previousInput = currentInput; //setting the previous input
        currentInput = '';
        document.getElementById('display').value = `${previousInput} ${currentOperation}`;
        console.log('else statement executed');

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
        case '÷':
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
    storageString = result; //storing the calculation in the storageString 

    currentOperation = '';
    currentInput = '';
    console.log(`${sign}`);

}

function clearDisplay(){
    currentInput = '';
    currentOutput = '';
    previousInput = '';
    currentOperation = '';
    storageString = '';
    negativeFlag = false; 
    document.getElementById('display').value = '';

}

function backDisplay(){
    currentInput = currentInput.slice(0,-1);
    document.getElementById('display').value= `${currentInput} ${previousInput} ${currentOperation}`;
}
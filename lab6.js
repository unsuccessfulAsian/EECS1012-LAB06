
/**
 * The function below should tie the execution of your algorithms
 * to interactions with elements in your HTML.
 * Once you have completed the lab, this should 
 * allow you to run algorithms within the browser!
 */
function activateButton(){
    const button = document.getElementById('submit');
    button.addEventListener('click', function() {
        let value = document.getElementById('algorithm').value;
        let number = document.getElementById('input').value;
        output = window[value](number);
        output = "For algorithm " + value + " and input " + number + ", output is " + output;
        document.getElementById('output').innerText = output;
    } );
}

//Complete, and add JSDoc to each function below!
function problem1( number ) {
    let originalNumber = parseInt(number);
    let i = 0;
    const digits = [];

    if (number < 10) {
        return true;
    } else{
        while (number >= 1) {
            digits.push(number % 10);
            number = Math.floor(number/10);
            i++;
        }
    
        let sum = 0;

        for (i = 0; i < digits.length; i++) {
            sum += parseInt(digits[i]**digits.length);
        }

        return sum === originalNumber; 
    }

    
}


function problem2( number ) {
    let i = 1;
    const divisors = [];

    while (i <= number/2) {
        if (number % i === 0) {
            divisors.push(i);
            i++;
        }
    }

    let sum = 0;

    for (i = 0; i < divisors.length; i++) {
        sum += divisors[i];
    }

    return sum === number;

}


function problem3( number ) {
    let sum = 0;
    let counter = 1;

    while (counter <= number) {
        let i = 1;
        let num = 5;

        while (i < counter) {
            i++
            num = (num*10) + 5;
        }

        sum += num;
        counter++;
    }

    return sum;
    
  
}

function problem4( number ) {
    let flag = true;
    let divisors = 1;

    for (let i = 2; i <= number; i++) {
        if (number % i === 0) {
            divisors++;
        }
    }

    if (divisors > 2) {
        flag = false;
    }

    if (number === 1) {
        flag = false;
    }  

    return flag;
}

function problem5( number ) {
    let cost = 5.75;
    let remainder = 0;

    if (number > 40) {
        number -= 40;
        cost += Math.ceil(number/20) * 3.50;
        remainder = number - 460;
    }

    if (remainder > 0) {
        cost+= remainder/2;
    }

    return cost.toFixed(2);

}

function problem6( number ) {
    
    let a;
    let b;
    let c;
    let val;

    if (number >= 2){
        b = 0;
        c = 1;
        val = 2;

        while (val <= number) {
            a = b;
            b = c
            c = a + b;
            val++;
        }
    } else {
        c = number
    }

    return c;

}

//uncomment this line to test with vitest at the command line!
//comment it to test your algorithms in the browser.
//export { problem1, problem2, problem3, problem4, problem5, problem6 }

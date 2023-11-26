//Getting the input element for minutes and the result element by their IDs
function convert() {
    let minutesInput = document.getElementById('minutes');
    let resultElement = document.getElementById('result');

//Parse the input value as a floating-point number
    let minutes = parseFloat(minutesInput.value);

//Checking if the entered value is a valid number
    if (isNaN(minutes)) {
        
        resultElement.innerHTML = '<p style="color: red;">Please enter a valid number for minutes.</p>';
        return; 
    }

//Calling the converter function to perform conversion
    let seconds = convertMinutesToSeconds(minutes);

//To display the result in the HTML
    writeToDOM(seconds);
}

function convertMinutesToSeconds(minutes) {
    return minutes * 60;
}

//function to write the result to the DOM 
function writeToDOM(seconds) {
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = '<p>Converted to seconds: ' + seconds.toFixed(2) + ' seconds</p>';
}


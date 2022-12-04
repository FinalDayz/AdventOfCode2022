// Call this file to run test or run it on the real data
// node runner.js - first argument can be day number, default is newest day folder
// first argument can also be 'test' for a run on the test input and output
// when the first argument is a day, second argument can still be 'test'

const args = process.argv.slice(2);

let dayNum = '';
let checkOutput = false;
let inputFile = 'input.txt'

function inputToDayFolder(input) {
    const inputNum = parseInt(input);

}

if (args.length === 0) {
    // Run newest without test
} else if(args.length === 1) {
    const firstArg = args[0];
    if(firstArg === 'test') {
        checkOutput = true;
        inputFile = 'test-input.txt';
    } else {

    }

} else {

}

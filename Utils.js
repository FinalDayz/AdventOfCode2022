const fs = require('fs');

exports.readInput = function() {
    const fileName = './input.txt';

    const data = fs.readFileSync(fileName, 'utf8');
    return data;
}
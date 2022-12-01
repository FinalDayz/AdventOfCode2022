const {readInput} = require('../Utils');

const data = readInput();


function addUpElvesCalories(calorieLines) {
    const totalElvesCalories = [];
    
    for(const calorieLine of calorieLines) {
        let totalCalories = 0;
        for(const calorie of calorieLine.split('\n')) {
            totalCalories += parseInt(calorie);
        }
        totalElvesCalories.push(totalCalories);
    }

    return totalElvesCalories;
}

function getMax(arrOfInts) {
    return arrOfInts.reduce(
        (accumulator, currentValue) => Math.max(accumulator, currentValue)
    );
}

const elvesCalories = data.split('\n\n');

const addedUpElvesCalories = addUpElvesCalories(elvesCalories);

const maxCalories = getMax(addedUpElvesCalories);

console.log("Max added up calories:", maxCalories)
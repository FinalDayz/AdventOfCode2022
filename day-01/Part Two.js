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

const elvesCalories = data.split('\n\n');

const addedUpElvesCalories = addUpElvesCalories(elvesCalories);

const addedUpElvesCaloriesSorted = addedUpElvesCalories.sort(((a, b) => a-b));

const top3Calories = addedUpElvesCaloriesSorted.slice(-3);

console.log("Top 3:", top3Calories, "Added up: ", top3Calories[0] + top3Calories[1] + top3Calories[2])
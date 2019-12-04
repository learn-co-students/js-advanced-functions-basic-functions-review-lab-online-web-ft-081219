// Your code here

//function declaration
function saturdayFun(word = "roller-skate") {
    return `This Saturday, I want to ${word}!`
}
saturdayFun()


//function expression
const mondayWork = function (word = "go to the office") {
    return `This Monday, I will ${word}.`
}
mondayWork("study")


// Scope Chain
function wrapAdjective(name = "*") {
    return function (word = "special") {
        return `You are ${name}${word}${name}!`
    }
}

let outputWrapAdjective = wrapAdjective("%")("a dedicated programmer")

outputWrapAdjective





// the LAB:
let Calculator = {
    add: function () {
        return 1 + 3;
    },
    subtract: function () {
        return 1 - 3;
    },
    multiply: function () {
        return 1 * 3;
    },
    divide: function () {
        return 10 / 5;
    }
}

let string1 = 2;

function actionApplyer(string1, arrayFunc = []) {
    let result = string1 + arrayFunc;
    return parseInt(result);
}

actionApplyer(string1, arrayFunc)



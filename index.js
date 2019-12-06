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



function actionApplyer(num, array_of_functions) {
    if (array_of_functions === undefined || array_of_functions.length == 0) {
        return num;
    } else {
        for (let i = 0; i < array_of_functions.length; i++) {
            num = array_of_functions[i](num);

        }
        return num;
    }
}
actionApplyer(13, array_of_functions)



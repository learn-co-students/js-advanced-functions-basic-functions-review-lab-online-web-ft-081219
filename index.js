function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrap = '*') {
    return function(adj = 'special'){
        return `You are ${wrap + adj + wrap}!`;
    }
}

let Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}

function actionApplyer(int, array) {
    for (let i = 0; i < array.length; i++){
        int = array[i](int);
    }
    return int;
}
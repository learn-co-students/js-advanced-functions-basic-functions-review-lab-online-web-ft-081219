function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
};

let mondayWork = function(toDo = 'go to the office'){
    return `This Monday, I will ${toDo}.`;
};

function wrapAdjective(flair = "*"){
    return function(adj = "special"){
        return `You are ${flair}${adj}${flair}!`;
    };
};

let encouragingPromptFunction = wrapAdjective("!!!");

let Calculator = {
    add: (function(){return 1 + 3}),
    subtract: (function(){return 1 - 3}),
    multiply: (function(){return 1 * 3}),
    divide: (function(){return 10 / 5})
};

let actionApplyer = function(num, fns){
    for (const fn of fns){num = fn(num)};
    return num;
};

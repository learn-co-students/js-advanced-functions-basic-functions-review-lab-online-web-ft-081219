function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
  return function(param='special') {
    return `You are ${flair}${param}${flair}!`;
  }
}

class DoesMath {
  constructor() {}
  
  add(num1, num2) {return num1 + num2;}
  
  subtract(num1, num2) {return num1 - num2;}
  
  multiply(num1, num2) {return num1 * num2;}
  
  divide(num1, num2) {return num1 / num2;}
}

let Calculator = new DoesMath;

function actionApplyer(startingInt, array) {
  if (array.length === 0) {
    return startingInt
  } else {
    return array.reduce((function(newInt,fn) {
      return fn(newInt);
    }),startingInt);
    // return array.reduce(((newInt, fn) => fn(newInt)),startingInt)
  }
}
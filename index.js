// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(str = "*") {
  return function(string = "special") {
    return `You are ${str}${string}${str}!`
  }
}

const Calculator = {
  add: function(a,b) {
    return a + b
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b
  }
}

let actionApplyer = function(start , b) {
  let a = start
  
  for (let i = 0; i < b.length; i++ ){
    a = b[i](a)
  }

  return a
}

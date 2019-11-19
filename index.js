// Your code here
function saturdayFun(arg="roller-skate"){
    return `This Saturday, I want to ${arg}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wraper = "*"){
    return (arg = "special" )=>{
        return `You are ${wraper}${arg}${wraper}!`
    }
}

const Calculator= {
    add: (num1 , num2) => {return num1 + num2},
    subtract: (num1,num2) => {return num1 - num2},
    multiply: (num1,num2) => {return num1 * num2},
    divide: (num1,num2) => {return num1 / num2}
    
}

function actionApplyer(int, array){
    if(array.length === 0){
        return int
    }else{
        
         let result = array.map(e => { return e(int)})
        return result.push(int)
    }
}
import {calculateAspectRatio} from "./aspect-ratio.js"
import {modulo,percentage,percentageOf,difference} from "./percentage.js"

/*
Modulo
*/ 
const modFirst = document.querySelector("#modulo_1")
const modSec = document.querySelector("#modulo_2")
const modResult = document.querySelector("#modulo_result")

modFirst.addEventListener("change",modCalc)
modSec.addEventListener("change",modCalc)

function modCalc (){
        modResult.value= modulo(modFirst.value,modSec.value)
}

/*
Percentage
*/ 

const percFirst = document.querySelector("#percentage_1")
const percSec = document.querySelector("#percentage_2")
const percResult = document.querySelector("#percentage_result")

percFirst.addEventListener("change",percCalc)
percSec.addEventListener("change",percCalc)

function percCalc (){
        percResult.value= percentage(percFirst.value,percSec.value)
}

/*
PercentageOf
*/ 

const percOfFirst = document.querySelector("#percentageOf_1")
const percOfSec = document.querySelector("#percentageOf_2")
const percOfResult = document.querySelector("#percentageOf_result")

percOfFirst.addEventListener("change",percOfCalc)
percOfSec.addEventListener("change",percOfCalc)

function percOfCalc (){
        percOfResult.value= percentageOf(percOfFirst.value,percOfSec.value)
}


/*
Percentagediff
*/

const percDiffFirst = document.querySelector("#difference_1")
const percDiffSec = document.querySelector("#difference_2")
const percDiffResult = document.querySelector("#difference_result")

percDiffFirst.addEventListener("change",percDiffCalc)
percDiffSec.addEventListener("change",percDiffCalc)

function percDiffCalc (e){
        percDiffResult.value= difference(percDiffFirst.value,percDiffSec.value)
}

/*
calculateAspectRatio 
*/
const ratio1 = document.querySelector("#ratio_1")
const ratio2 = document.querySelector("#ratio_2")
const ratiowidth = document.querySelector("#ratio_result-width")
const ratioheight = document.querySelector("#ratio_result-height")

ratiowidth.addEventListener("change", ratioCalc )
ratioheight.addEventListener("change", ratioCalc )

function ratioCalc(event){
    if (event.target.id==="ratio_result-height"){
        ratiowidth.value = calculateAspectRatio(ratio1.value,ratio2.value,ratioheight.value,"h")
    }else{
        ratioheight.value = calculateAspectRatio(ratio1.value,ratio2.value,ratiowidth.value,"w")
    }
        
}

// originalWidth, originalHeight, newValue, valueType
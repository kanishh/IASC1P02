


function outputMath(){


var inputOne = (document.getElementById("textInputOne"));

var inputTwo = document.getElementById("textInputTwo");


var inputFinal = Number(inputOne.value) + Number(inputTwo.value);



document.getElementById("mathOutput").innerHTML= inputFinal;
}

function outputMathSub(){


var inputOne = (document.getElementById("textInputOne"));

var inputTwo = document.getElementById("textInputTwo");


var inputFinal = Number(inputOne.value) - Number(inputTwo.value);



document.getElementById("mathOutput").innerHTML= inputFinal;
}

function outputMathMult(){


var inputOne = (document.getElementById("textInputOne"));

var inputTwo = document.getElementById("textInputTwo");


var inputFinal = Number(inputOne.value) * Number(inputTwo.value);



document.getElementById("mathOutput").innerHTML= inputFinal;
}


function outputMathDiv(){


var inputOne = (document.getElementById("textInputOne"));

var inputTwo = document.getElementById("textInputTwo");


var inputFinal = Number(inputOne.value) / Number(inputTwo.value);



document.getElementById("mathOutput").innerHTML= inputFinal;
}

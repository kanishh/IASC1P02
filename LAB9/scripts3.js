


function outputMath(){


var inputOne = (document.getElementById("textInputOne"));

var inputTwo = document.getElementById("textInputTwo");


var inputFinal = Number(inputOne.value) + Number(inputTwo.value);



document.getElementById("mathOutput").innerHTML= inputFinal;
}

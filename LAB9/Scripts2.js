var promptResults = prompt("What is your age?")


var currentYear = new Date();
var y = currentYear.getFullYear()

var newResults = (y-promptResults)


document.getElementById("changedDate").innerHTML= newResults;

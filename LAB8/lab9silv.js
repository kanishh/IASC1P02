function newValue(){
  var firstInput = document.getElementById("firstInput");

  var secondInput = document.getElementById("secondInput");

  var addition = Number(firstInput.value) + Number(secondInput.value);

  document.getElementById("outputValue").innerHTML = addition;

  alert("You have been on this page for: " + newtime + " seconds");

}

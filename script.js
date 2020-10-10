/*    script.js    */

window.onload = function () {
  document.getElementById("string-submit").addEventListener("click", processString);
  document.getElementById("restart").addEventListener("click", initRefresh);

}

/**
 * Functionality for Processing the data
 */
function processString() {
  // 

  ///
}

/**
 * Show the result for the submitted string.
 */
function displayResult(stringSubmit) {

  // Find the first letter that is not repeated:



  return result;
  ////
}

/**
 * Rewrite the string in order of number of occurrences, and order. 
 */
function rewriteString(stringSubmit) {
  //




  ////
}

/**
 * Initialize a new form
 */
function initRefresh() {
  // 

  // Reset the result display.
  document.getElementById("result").innerHTML = '';

  // Reset input.
  document.getElementById("enterred-string").value = "";

}

// 
function showTheResult(result) {

  let dialog = "<div class='alert alert-success' role='alert'>"
  dialog += result;
  dialog += "</div>"

  document.getElementById("result").innerHTML = dialog;

}


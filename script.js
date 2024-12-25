// script.js
function toggleMessage() {
  var messageElement = document.getElementById("message");
  if (messageElement.innerHTML === "") {
    messageElement.innerHTML = "Hello, World!";
  } else {
    messageElement.innerHTML = "";
  }
}
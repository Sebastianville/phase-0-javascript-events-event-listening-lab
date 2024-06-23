const buttonGrab = document.getElementById("button")
function clickAlert() {
    alert('I was clicked!');
  }

function addingEventListener() {
    buttonGrab.addEventListener("click", clickAlert)
}

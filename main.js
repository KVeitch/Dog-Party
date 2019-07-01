document.addEventListener("DOMContentLoaded", function(){
  nameChange();
});

function nameChange(){
  document.getElementById("main-button").onclick = function(event){
    event.preventDefault();
    var inputedText = document.getElementById('main-name').value;
    document.getElementById("name-change").innerHTML = inputedText;
  }
}
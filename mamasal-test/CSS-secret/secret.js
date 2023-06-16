var inputText = document.getElementById("inputText");
inputText.addEventListener("input", function() {
  var monemone = document.getElementsByClassName("monemone")[0];
  if (inputText.value === "맹세컨대 잡히면 후회할 거다!") {
    monemone.classList.add("fade-in");
    monemone.style.display = "block";
  } else {
    monemone.style.display = "none";
    monemone.classList.remove("fade-in");
  }
});
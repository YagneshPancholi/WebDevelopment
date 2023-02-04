const form = document.querySelector("#nameForm");
const input = document.querySelector("#names");
const list = document.querySelector("#presentNames");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const presentName = input.value;
  const newLI = document.createElement("li");
  newLI.innerText = presentName;
  list.append(newLI);
  input.value = "";
});

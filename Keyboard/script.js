function handleKeyboard(event) {
  if (event.key === "a") document.body.style.background = "#e8e15d";
  else if (event.key === "v") document.body.style.background = " #db5656";
  else if (event.key === "l") document.body.style.background = " #ef7d30";
  else if (event.key === "r") document.body.style.background = " #a369d6";
  else document.body.style.background = " #6abae2";
}

window.addEventListener("keydown", handleKeyboard);

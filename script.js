function input(value) {
  const display = document.getElementById("display");
  if (display.innerText === "0") display.innerText = "";
  display.innerText += value;
  document.getElementById("input_display").value = display.innerText;
}
function clearDisplay() {
  document.getElementById("display").innerText = "0";
}
function deleteDigit() {
  const display = document.getElementById("display");
  display.innerText = display.innerText.slice(0, -1) || "0";
}
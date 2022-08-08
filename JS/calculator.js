let string = "";
let buttons = document.querySelectorAll(".button");
const deletbtn = document.getElementsByClassName;
// Making array from these buttons and apply forEach method
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input ").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input ").value = string;
    } else if (e.target.innerHTML == "%") {
      string = string / 100;
      document.querySelector("input ").value = string;
    } else if (e.target.innerHTML == "exp") {
      string = Math.exp(string);
      document.querySelector("input ").value = string;
    } else if (e.target.innerHTML == "sqrt") {
      string = Math.sqrt(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "pow") {
      let string2 = document.getElementsByClassName("input").value;
      string = Math.pow(string, string2);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "x2") {
      string = string * string;
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "x3") {
      string = string * string * string;
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input ").value = string;
    }
  });
});

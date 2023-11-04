var myinput = document.querySelector(".result");
var deletbtn = document.querySelector(".del-btn");
var myallbtn = document.querySelectorAll(".allbtn");
var equalbtn = document.querySelector(".equalbtn");
var delet_last = document.querySelector(".delet-l-btn");
myallbtn.forEach((x) => {
  x.addEventListener("click", () => {
    myinput.value += x.innerHTML;
  });
});
deletbtn.addEventListener("click", () => {
  myinput.value = "";
});
equalbtn.addEventListener("click", () => {
  myinput.value = eval(myinput.value);
});
delet_last.addEventListener("click", () => {
  myinput.value = myinput.value.slice(0, -1);
});
//
var address = document.querySelector(".address");
var calculator = document.querySelector(".calculator");
var mooddark = document.querySelector(".dark");
mooddark.addEventListener("click", () => {
  calculator.style.background = "black";
  myinput.style.background = "black";
  myinput.style.color = "white";
  address.style.color = "black";
});
var mooddark = document.querySelector(".light");
mooddark.addEventListener("click", () => {
  calculator.style.background = "#ffffffbd";
  myinput.style.background = "#ffffff45";
  myinput.style.color = "black";
  address.style.color = "white";


});
///

let greeting = "Welcome!🌼";
alert(greeting);

function adoptWithLove() {
  let name = prompt("What is your name?");
  let contact = prompt("Please write your phone number or email address");
  let age = prompt("How old are you?");
  let h1 = document.querySelector("h1");
  if (age >= 18) {
    h1.innerHTML =
      "Thanks for choosing to adopt " +
      name +
      "!🥳 We will contact you on " +
      contact +
      " soon.";
  } else {
    alert("Sorry " + name + ", you are too young to adopt😔");
  }
}
let button = document.querySelector("button");
button.addEventListener("click", adoptWithLove);

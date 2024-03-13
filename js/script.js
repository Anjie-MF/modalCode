//PROPER  FORM__ 1.declare variables at the beginning of your code;
//PROPER  FORM__2. declare the event handlers 
//WHY? to quickly see all the variables you're using without having to scan through the event handler functions
var button = document.querySelector(".got-this");//button class name was "got this" not button//
var modal = document.querySelector(".modal");
var span = document.querySelector(".modal-x");

button.addEventListener("click", function () {
    modal.classList.add("show-modal");
    button.innerText = "You've got this!!"
})

span.addEventListener("click", function () {
    modal.classList.remove("show-modal");
    button.innerText = "Who's got this?"
})

//console.log(button, modal, span); you can log out multiple messages :D
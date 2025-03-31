// Select all radio buttons
var radios = document.querySelectorAll(".rad");

// Loop through each radio button
radios.forEach(function (radio) {
    radio.addEventListener("click", function () {
        // Get the target div (".message")
        var messageDiv = document.querySelector(".message");
        var depotDiv = document.querySelector(".depot");


        // Check if "message" radio is selected
        if (document.getElementById("message").checked) {
            messageDiv.classList.remove("hide"); // Show message div
            depotDiv.classList.remove("show"); // Show message div
        } else {
            messageDiv.classList.add("hide"); // Hide message div
            depotDiv.classList.add("show"); // Hide message div
        }
    });
});

var btnreset=document.getElementById("resetform");

btnreset.addEventListener("click",resetform);

function resetform()
{
    let forms = document.getElementsByClassName("formarea"); 
       for (let i = 0; i < forms.length; i++) {
        forms[i].reset(); 
    }}

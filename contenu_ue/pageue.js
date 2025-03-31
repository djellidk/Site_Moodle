
/* Start Expand Collapse */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    panel.classList.toggle("show"); 
    
    var icon=this.querySelector("i");
    if(panel.classList.contains("show")){
        icon.classList.remove("bi-arrow-right");
        icon.classList.add("bi-arrow-down");
    }
    else
    {
        icon.classList.remove("bi-arrow-down");
        icon.classList.add("bi-arrow-right");

    }
  });
}

/* End Expand Collapse */




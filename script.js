document.addEventListener("DOMContentLoaded", function() {
    var welcome = document.getElementById("welcome");
    var tagline = document.getElementById("tagline")
  
    function fadeInElement(element){
      element.style.display = "block";
      element.offsetHeight;
      element.style.opacity = "1";
    }
    fadeInElement(welcome);
    setTimeout(function() {
      fadeInElement(tagline);
    }, 900);
    
  });

window.addEventListener('scroll', function(){
    let Yval = this.pageYOffset
    var aboutyElement = document.getElementById("abouty");
    var whoweare = aboutyElement.offsetTop;
    var cvElement = document.getElementById("culture-and-values");
    var vtElements = document.querySelectorAll(".vt");
    var values = cvElement.offsetTop;
   
   
   
    function fadeInElement(element){
     element.style.transition = "opacity 0.5s ease"
     element.style.opacity = "1";
   }
   
    if (Yval >= whoweare - 800){
     fadeInElement(aboutyElement);
    }
   vtElements.forEach(function(vt) {
      if (Yval >= values - 800){
       fadeInElement(vt);
      }
    });
   
   });
   
document.addEventListener("DOMContentLoaded", function() {
     window.scrollTo(0, 0); 
     
   });

// Add this script to your existing script or a separate JavaScript file

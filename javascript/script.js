$(document).ready(function(){

  $('.accordion').click(function() {
    $(".step-call", this).toggle();
  });
  $('.accordion').click(function() {
    $(".step-call-hide", this).toggle();
  });

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
          /* Toggle between adding and removing the "active" class,
          to highlight the button that controls the panel */
          this.classList.toggle("active");

          /* Toggle between hiding and showing the active panel */
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      }
  }

// PARALLAX SCROLL
  $('#window-1').parallax({imageSrc: './images/001.jpg'});
  $('#window-2').parallax({imageSrc: './images/002.jpg'});

});


window.onload = () => {
// $("#nav a").on("click", function(){
//    $("#nav a").find(".active").removeClass("active");
//    $(this).parent().addClass("active");
// });


console.log('script.js says "I\'m here"');

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");
console.log(header);

// Get the offset position of the navbar
var sticky = header.offsetTop;
console.log( sticky );

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if ( window.pageYOffset > sticky ) {
    header.classList.add("sticky");
  } else {
    header.classList.remove( "sticky" );
  }
}

// Get the container element
var btnContainer = document.getElementById("ul");
console.log(btnContainer);

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-button");
console.log(btns);

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//
//     // If there's no active class
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }
//
//     // Add the active class to the current/clicked button
//     this.className += " active";
//   });


  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

$(document).ready(function(){
$(".btn > a").click(function() {             // when clicking any of these links
    $(".box > a").removeClass("youarehere"); // remove highlight from all links
    $(this).addClass("youarehere");          // add highlight to clicked link
})

})
}

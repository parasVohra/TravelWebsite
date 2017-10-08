$( document ).ready( function() { 

    console.log("js is running");

    $(".menuBox").click(menuScreen);


 }) 

 function menuScreen() {

    $(".menuScreen").toggleClass("displayBlock");

     console.log("clicked");

 }
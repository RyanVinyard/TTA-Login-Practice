$(document).ready(function() {
  $("form#credentials").submit(function(event) {
    event.preventDefault();
    alert("This is just a test, you're not actually logging in to anything. But it works! Check the console to see what you inputted");
    var userName = $("input#userName").val();
    var userPass = $("input#userPass").val();
    console.log(userName, userPass);
  });
});

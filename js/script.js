
for (var i = 1; i <= 100; i++) {
  var message ="";
  if ((i % 5) == 0) {
    message += 'Buzz';
  }
   if ((i % 3) == 0) {
    message += 'Fizz';
  }
  if((i % 5) != 0 && (i % 3) != 0) {
    message = i;
  }

  document.getElementById("numeri").innerHTML += '<li>' + message + '</li>';
  
}

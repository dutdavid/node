//We pass in an anonymous function as an argument to the setTimeout() function. ES6 provides a new way to define anonymous functions. we call it the fat arrow syntax (=>).
function ping (){
  setTimeout(function(){
    console.log("Ping")
  },1000);
}
ping()// waits one second then pings


//If we have only one expression we can eliminate the curly braces altogether.
/*function ping (){
  setTimeout(()=>console.log("Ping"),1000);
}
ping()//ping*/

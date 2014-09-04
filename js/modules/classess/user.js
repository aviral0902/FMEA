// A car "class"
function User( options ) {
 
  this.name = options.name;
  this.firstName = options.firstName;
  this.lastName  = options.lastName;
 
  this.getName = function () {
    return this.name;
  };
 
}

//Usage:
/*
var user = new User({
  name : "xyz",
  firstName : "xyz",
  lastName  : "xyz"
  
});
 
user.id = "2010";*/

 

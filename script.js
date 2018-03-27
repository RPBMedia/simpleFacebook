var database = [
  {
    username: "Rui",
    password: "123",
  },
  {
    username: "Sarah",
    password: "secret2",
  }
];

var newsFeed = [
  {
    username: "Bob",
    timeline: "Hi everyone"
  },
  {
    username: "Sarah",
    timeline: "Hello world"
  },
];

var usernamePrompt = prompt("Enter your username");
var passwordPrompt = prompt("Enter your password");


function signIn(user, pass) {

  var userFound = findUser(user);
  if(!userFound) {
    alert("User not found");
    return false;
  } else if (user === userFound.username &&
     pass === userFound.password) {
    return true;
  } else {
    alert("Invalid credentials");
    return false;
  }
}

function findUser(username) {
  var result = null;
  database.forEach(function(user) {

    if(user.username === username) {
      result = user;
    }
  });
  return result;
}
var loggedIn = false;
var signInSuccess = signIn(usernamePrompt, passwordPrompt);

if(signInSuccess === true) {

  loggedIn = true;

  var h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode("Timeline"));

  var logOutButton = document.createElement("button");
  logOutButton.appendChild(document.createTextNode("Log out"));
  logOutButton.addEventListener("click", function(){
    alert("Log out");
    loggedIn = false;
  });

  var ul = document.createElement("ul");
  newsFeed.forEach(function(item) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item.username + ': '+item.timeline));
    ul.appendChild(li);
  })

  var input = document.createElement("input");
  var addItemButton = document.createElement("button");
  addItemButton.appendChild(document.createTextNode("Post to timeline"));
  addItemButton.addEventListener("click", function(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
  });

  var body = document.querySelector("body");
  body.appendChild(h2);
  body.appendChild(ul);

  body.appendChild(input);
  body.appendChild(addItemButton);
  body.appendChild(logOutButton);
}

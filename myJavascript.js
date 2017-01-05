//sample data modified from randomUser.me
var randomUser = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "stella",
        "last": "meyer"
      },
      "location": {
        "street": "7385 kapellenweg",
        "city": "schmalkalden-meiningen",
        "state": "saarland",
        "postcode": 58225
      },
      "email": "stella.meyer@example.com",
      "picture": {
        "medium": "https:\/\/randomuser.me\/api\/portraits\/med\/women\/50.jpg"
      },
      "nat": "DE"
    }
  ]
}

//handlebars step one: grap the html from the script tag

// get random user
var randomUser;

function getUser(){
  return new Promise(function(resolve, reject) {
    $.ajax({
      url:"https://randomuser.me/api"
    })
    .done(function(data, x, t) {
      console.log("data", data)
      resolve(data)
    })
  })
}
getUser()
.then(function(value) {
  var randomUser = value
var userHTML = $("#randomUserPartial").html()

//handlebars step two: compile it into a template
var userTemplate = Handlebars.compile(userHTML)

//handlebars step three:render the HTML by passing the data to the template
var userOutput = userTemplate(randomUser)

//handlebars step four: put the complete HTML into the DOM
$("#userOutput").append(userOutput)
})
// var stuffToDisplay = <img src="${user.results[0].picture.large}">
// document.getElementById("user").innerHTML = stuffToDisplay

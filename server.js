var express = require("express");

// creates the web application and saves to a variable called app.
var app = express();
// our app will run on localhost:8080. process.env.PORT is used for heroku
var PORT = process.env.PORT || 8080;

// lets my application parse JSON objects
app.use(express.json())

//-----------------------------ROUTES--------------------------------------------------------

require("./app/routing/api-routes")(app)
require("./app/routing/html-routes")(app)


// set up app to listen on port.
app.listen(PORT, function () {
    console.log("app is listening on http://localhost:" + PORT)
})


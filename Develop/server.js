//dependencies

const fs = require("fs");
const express = require("express");



// sets up express app
var app = express();
var PORT = process.env.PORT || 8080


// app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static("./assets"));
app.use(express.json());


require("./routing/html-routes")(app);
require("./routing/api-routes")(app);

// Server starts to listen

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
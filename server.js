var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require("mongoose"),
    Task = require("./api/models/todoListModel"), // Created model loading here
    bodyParser = require("body-parser");
// mongoose instance url connection
mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb://192.168.8.104:27017/ToDoDB",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: "todo_user",
        pass: "todo_user@123"
    })
    .then(() => {
        console.log("Connection success");

    }).catch(err => {
        console.error("Error: ", err);

    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res) { // 
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

var routes = require("./api/routes/todoListRoutes");
routes(app); // register the routes

app.listen(port);
console.log("TODO List RESTful API server started on port: ", port);

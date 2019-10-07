express= require("express");
path= require("path");
var app = express();
var PORT = 1111;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// get route to survey (link to survey)
app.get("/", function(req, res){
    res.sendFile(path.json(__dirname, "survey.html"));
});

// default route that leads to main page
express= require("express");
path= require("path");
var app = express();
var PORT = 1111;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());// get route `api/friends` displays JSON of possible friends
// post route `api/friends
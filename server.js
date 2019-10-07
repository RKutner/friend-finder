express= require("express");
path= require("path");
var app = express();
var PORT = 1111;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var questions = [
    "I prefer to avoid potentially incitory topics, like politics.",
    'I like quieter "couples time" more than big crowded events.',
    'I prefer being near the ocean to being in large population centers',
    'I love long walks on the beach',
    "Compatible religion is among the most important things when looking for a partner.",
    "I think that the major religions' stranglehold on world culture is damaging to the collective soul of humanity.",
    "Innsmouth is a wonderful vacation destination at any time of the year",
    "Obed Marsh was a visionary who has been unjustly neglected by history.",
    "Human sacrifice gets a bad rap.",
    "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn!",
    ];

express= require("express");
path= require("path");
var app = express();
var PORT = 1111;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());// friends data should be stored as an array of objects including name, picture, and an array of scores

var friends= ["Minh Thi Phan", "Norman WIthers", "Robert Olmstead", "Patrice Hathaway", "Rex Murphy", "Silas Marsh", "Daisy Walker", "Finn Edwards", "Walter Gilman", "Wendy Adams", "Zoey Samaras"];

const scores = () =>{
    var friendScore=[];
    for (let i=0; i<10; i++){
friendScore.push(Math.floor(Math.random() * 5) + 1);
}
console.log(friendScore);
};


for (let i=0; i<friends.length; i++){
    console.log(friends[i])
    scores()
}

let friend={
    name: friends[i],
    scores= []
}
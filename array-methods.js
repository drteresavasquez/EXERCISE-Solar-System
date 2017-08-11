console.log("array-methods.js, Yo!");

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
// let test = planets[0][0].toUpperCase();
// console.log(test);
var el = document.getElementById("planets");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
function planetList(){
    planets.forEach(function(planet) {
        el.innerHTML += `<li>${planet}</li>` 
    });
}
planetList();

// Use the map method to create a new array where the first letter of each planet is capitalized
function map(){
    //REMEMBER...map creates a new array so it needs a new name
    let capitalizePlanets = planets.map(function(array){
        //this (array.charAt(0).toUpperCase()) looks at the array and capitalizes the first letter of each item. 

        //this (+ array.slice(1)) takes off the first letter of each item in the array and adds the remaining letters to the capitilized letter.
        return array.charAt(0).toUpperCase() + array.slice(1);
    });
    el.innerHTML += `<p>${capitalizePlanets}</p>`;
};
map();

// Use the filter method to create a new array that contains planets with the letter 'e'
// let yes = planets[3].indexOf("e");
// console.log(yes);

function filter(){ 
    var filtered = planets.filter(function(singlePlanet){
        //looks at each planet in the planets array and looks for an e. If there is at least one, returns 1.
        return singlePlanet.indexOf("e") === 1;
    });
el.innerHTML += `${filtered}`;
}
filter();

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

function reduce(){
    let sentence = words.reduce(function(a, b){
        return `${a} ${b}`;
    });
    el.innerHTML += `<p><b>Reduce Method:</b> ${sentence}</p>`;
}
reduce();

function join(){
    el.innerHTML += `<b>Join Method: </b>`;
    el.innerHTML += words.join(" ");
};
join();







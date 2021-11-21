const _ = require('lodash');

let buildings = [
    {name: "Lotus Temple", age: 35, country: "India"},
    {name: "Khan Shatyr", age: 11, country: "Kazakhstan"},
    {name: "Guggenheim Museum", age: 82, country: "USA"},
    {name: "National Library", age: 99, country: "Belarus"},
    {name: "Krzywy Domek", age: 16, country: "Poland"},
    {name: "central Library", age: 148, country: "USA"}
]

console.log(_.first(buildings));
console.log(_.sortBy(buildings, 'age'));
console.log(_.filter(buildings, {country: 'USA'}));
console.log(_.minBy(buildings, 'age'));
console.log(_.maxBy(buildings, 'age'));
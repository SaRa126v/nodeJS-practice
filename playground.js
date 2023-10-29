const fs = require('fs');

const family = [
    {id:1, name: "Saber"},
    {id:2, name: "Sara"},
    {id:3, name: "Reiner"},
]

// string it and put in in json file
fs.writeFileSync("contacts.json", JSON.stringify(family));

// variables = bindings
// terminal (Linux) = command prompt(windows) = console()

const info = fs.readFileSync("contacts.json");
// buffer & cannot be read
console.log(info);
// now it can be read it but it is string & cannot be used
console.log(info.toString());
console.log(typeof info.toString());

console.log(JSON.parse(info.toString()));

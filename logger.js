// second session........................................

const name = "Saber";
const so = person =>{
    console.log(`His SO is ${person}`);
}

// 1)
// exports is an object
// module.exports = {
// name,
// so,
// }

// 2)
// module.exports.drinks = "coffee";
// change so function name, so no longer available 
// module.exports.love = so;
// module.exports.name;

// 3)
// module.exports = {
//     love: so,
// coldDrink: "soda",
// }

// 4)
// exports.drinks = "coffee";

const fs = require("fs");
const chalk = require("chalk");
const { log } = require("console");


const addContact = (namee, phone, email) => {
const contacts = loadContacts();
// yani chi mide b c?***********
const duplicateContact = contacts.find( c = c.name === c.name);

// if they are not repeated, add them 
if (!duplicateContact) {
    contacts.push(namee, phone, email);
    console.log(chalk.greenBright("contact saved")); 
} else {
    console.log("contact already exists");
}



};

const loadContacts = () =>{
// to avoid app from crashing
try {
  // get buffer
  const dataBuffer = fs.readFileSync("contacts.json");
  // get string
  const contact = dataBuffer.toString();
  // get the array
  return JSON.parse(contact);
} catch(errorr){
    // show the error
    console.log(errorr);
    // because we should get an array from this function
    return [];
}
}


module.exports = {
  addContact,  
}

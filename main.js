// import from our files................................
// const chalk = require("chalk");

// import from a website................................
// const text = require("./logger");
// const { log } = require("console");

// console.log(text);
// console.log(chalk.red("test"));
// console.log(chalk.blue("testing"));

// what is dev dependency for ?
// .....................................................
// npm un chalk = uninstall chalk
// npm i chalk = install chalk
// npm i chalk --save-dev = tosee mode
// npm chalk bootstrap-v4-rtl
// npm list --depth=0
// npm outdated
// npm i -g nodemon
// nodemon -e html .\main.js
// npm i @types/node = intelligence

// .....................................................
// scripts:
// npm start
// npm help
// npm run notReservedName

// .....................................................
// user system info
// console.log(process.title);
// console.log(process.pid);
// console.log(process.arch);
// console.log(process.version);
// console.log(process.platform);

// enviroment variables
// console.log(process.env);

// process.exit();

// process.kill();

// 2
// code = parameter
// process.on("beforeExit", code =>{
// log("process before exit", code);
// })

// 3
// process.on("exit", code =>{
//     console.log("process exit", code);
// })

// 1
// this code will run faster
// console.log("this should run first");

// npm start , start = flag , npm = a programm
// get access to flags = argv ( an array)

// process.argv.forEach( (val , index)=>{
//      log(`${index}:${val}`);
//     });

// which directory are we in?
// console.log(process.cwd());

// ....................................................
// a syncronized = doesnt wait or the process to be completed before going to the next lines of code # syncronized

// const fs = require('fs');
// fs = file system

// they go in an event loop and wait for the easier code to run

// make a file with sth in it
// fs.writeFile("test.txt", "This is a test.", (err)=>{
//     if (err) throw err;
//     console.log("data saved");
// } )

// put sth else in the file that jas been made before
// fs.appendFile("test.txt", "\nThis is another test.", (err) =>{
//     if (err) throw err;
//     console.log("data appended");
// })


// sync does not  accept call back function
// fs.writeFileSync("test2.txt", "This is a test for sync file.");

// console.log("1");
// console.log("2");

// rename
// fs.rename("test2.txt", "testTwo", (err)=>{
// if(err) throw err;
// console.log("file has been renamed");
// })

// why this isnt deleted?**************
// delete
// fs.unlink("testTwo", function (err){
//     if(err) throw err;
// console.log("file has been deleted");
// })

// ....................................................

// operation system
// const os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.userInfo());
// console.log(os.release());
// console.log(os.hostname());
// console.log(os.uptime());

// ....................................................

// arguments:
// argv = an array
// node main.js
// node main.js sth
// node main.js "sth with space"

// const instruction = process.argv[2];

// because it is only one line we can write it without {}
// if(instruction == "sth") console.log("adding sth");
// else console.log("it is not there.");

// ....................................................

// console.log(process.argv);
// console.log(yargs.argv);
// yargs has easier access than process so we use it instead


const yargs = require('yargs');

const {addContact} = require('./contacts');

yargs.command({
    aliases: ["c", "crt"],
    command: "create",
    describe: "[create new contact]",
    builder:{
        name: {
            alias: "n",
            describe: "person's name",
            demandOption: true,
            type: "string",
        },
        phone: {
            // it cannot be more than one digit alias
            alias: "p",
            describe: "person's phone number",
            demandOption: true,
            type: "number",
        },
        email: {
            // it cannot be more than one digit alias
            alias: "e",
            describe: "person's email address",
            demandOption: true,
            type: "string",
        }
    },
    // handler(yargs){
    //     console.log(yargs.name, yargs.phone, yargs.email);
    // }

    handler({name, phone, email}){
// console.log(name, phone, email);
addContact(name, phone, email);
    }
})

yargs.parse();
// console.log(yargs.argv);
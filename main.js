// first session...........................................
console.log('hello world');

// هرفایل جی اس توی نود یک ماژول هست و باید ایمپورت شه
// http رو ایمپورت کردیم
const http = require("http");
const server = http.createServer((req, res) =>{
console.log(req);
})

server.listen(3000);

const os = require('os');

//  Info about current user


console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem()/(1024*1024*1024));
 console.log(os.platform());
 console.log(os.arch());
 console.log(os.userInfo());





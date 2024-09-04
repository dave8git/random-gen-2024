// const os = require('os');
const fs = require('fs');

// console.log('Platform: ', os.platform());
// console.log('Arch: ', os.arch());

let a = ['Artur', 'Bernard', 'Conrad', 'Dawid', 'Ewa', 'Franio'];

let b = ['Ellen', 'Joanno', 'Magda', 'Kate', 'Rosie', 'Ann'];

let c = ['M', 'F'];

let d = ['Bzyk', 'Ginter', 'Leiden', 'Von Streisland', 'Von Lon', 'Leyn'];

const randChoice = (arr) => {
    return arr[Math.floor(arr.length * Math.random())];
}

console.log(randChoice(b));

// fs.writeFile('outputfile.txt', data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });
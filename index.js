// const os = require('os');
const fs = require('fs');

// console.log('Platform: ', os.platform());
// console.log('Arch: ', os.arch());

let a = ['Artur', 'Bernard', 'Conrad', 'Dawid', 'Ewan', 'Franio'];

let b = ['Ewa', 'Joanno', 'Magda', 'Kate', 'Rosie', 'Ann'];

let c = ['M', 'F'];

let d = ['Bzyk', 'Ginter', 'Leiden', 'Von Streisland', 'Von Lon', 'Leyn'];

const randChoice = (arr) => {
    return arr[Math.floor(arr.length * Math.random())];
}

const people = [];

const generateObject = () => {
    

    for (let i = 0; i <= 20; i++ ) {
        const object = {};
        const gender = randChoice(c);

        if(gender === 'M') {
            object['gender'] = 'M';
            object['firstName'] = randChoice(a);
            object['lastName'] = randChoice(d);
        } else {
            object['gender'] = 'F';
            object['firstName'] = randChoice(b);
            object['lastName'] = randChoice(d);
        }

        console.log(object);
        people.push(object);
    }
}

generateObject();

let data = JSON.stringify(people)

console.log(data);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
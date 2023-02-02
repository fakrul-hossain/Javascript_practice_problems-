/* let names = ['abul', 'babul', 'kabul', 'dabul', 'ebul', 'babul', 'babul', 'abul', 'kabul', 'babul', 'ebul']

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
let uniqueNames = removeDuplicate(names);

 console.log(uniqueNames); */

 let names = ['abul', 'babul', 'kabul', 'dabul', 'ebul', 'babul', 'babul', 'abul', 'kabul', 'babul', 'ebul']

 function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
 }

 let uniqueNumber = removeDuplicate(names);
console.log(uniqueNumber);
let friends = [12, 55, 88, 63, 99, 45, 36,]

// removes elements from an array
// and. if necessary, inserts new elements in their place, 
// returning the deleted elements.
// will change the original array

let partial = friends.splice(1, 5, 33, 555, 666, 00, 20);

console.log(partial);
console.log(friends);
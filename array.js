
let country = "Bangladesh";
let age = 52;
let  isIndependent = true;
let student = {id: 120, class: 11, name: "agun"};
let friend = [13, 23, 25, 55, 66, 78, 99]
function add(num1, num2) {
    return num1 + num2
}

console.log(typeof age);
console.log(typeof country);
console.log(typeof isIndependent);
console.log(typeof student);
// check array using Array.isArray
console.log(Array.isArray(friend));
console.log(friend.includes(13));
console.log(typeof add);


let newFriendsAge = [12, 99, 88, 55, 63, 55,]

let allFriend = newFriendsAge.concat(friend)
 console.log(allFriend);

let user = {
    name: "John",
    secondName: "Doe",
    age: 30,
    isAdmin: true,
    
};

let key = prompt ('Что вы хотите узнать');

if (key == 12311) {
    alert('hello')
}   else if (key != 12311) {
    alert('error')    
}

alert(user [key]);
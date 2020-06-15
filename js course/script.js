let new_arr = {1:'mon', 2: 'tue', 3:'wed', 4:'thu', 5:'fri', 6:'sat', 7:'sun'};
let lang = prompt('Enter lang', 'ru/eng');


let weekDays = {
    'ru': ['пн'],
    'eng': ['mon', 'tue']
}

console.log(weekDays['ru'][0]);
console.log(weekDays['eng'][1]);
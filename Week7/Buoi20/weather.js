const weather = readline();
let count = 0;
for (let i=0; i<weather.length; i++) {
    if (weather[i] == 'R') {
        count ++;
    }
}
console.log(count * 4);
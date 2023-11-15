// Chuyen doi tu feet sang meter

function footMeter(foot) {
    var meter = 0.305 * foot;
    console.log(meter);
}

footMeter(5);

// arrow function
// meter => foot

const meterToFoot = meter => {
    var foot = meter / 0.3048;
    console.log(foot);
}
meterToFoot(5);
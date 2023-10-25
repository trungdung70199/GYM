// Bai 1
let btnAction1 = document.getElementById("btn-action-1");
btnAction1.addEventListener("click", () => {
    let length = parseInt(document.getElementById("length").value);
    let width = parseInt(document.getElementById("width").value);

    if (length === width) {
        alert('Day la hvg');
    } else {
        alert("Day la hcn");
    }
})

let btnAction2 = document.getElementById("btn-action-2");
btnAction2.addEventListener("click", () => {
    let a = parseFloat(prompt("Nhap so thu hai").value);
    let b = parseFloat(prompt("Nhap so thu hai").value);

    if (a > b) {
        alert(`So lon nhat la ${a}`);
    } else {
        alert(`So lon nhat la ${b}`);
    }
})
// Bai 3
// let btnAction3 = document.getElementById("btn-action-3");
// btnAction3.addEventListener("click", () => {
//     var n = parseFloat(prompt("Nhap so: ").value);
//     var abs = Math.abs(n);
//     alert("Giá trị tuyệt đối của số " + n + " là " + abs);
// })

document.getElementById("btn-action-3").addEventListener("click", () => {
    let n = parseFloat(document.getElementById("n").value);
    if (n >= 0) {
        alert(`Gia tri tuyet doi cua n la ${n}`);
    } else {
        alert(`Gia tri tuyet doi cua ${n} la ${-n}`);
    }
})
// Bai 4
let btnAction4 = document.getElementById("btn-action-4");
btnAction4.addEventListener("click", () => {
    var number = parseFloat(prompt("Nhap so tu 2 den 8"));
    switch (number) {
        case 2:
            alert("Monday");
            break;
        case 3:
            alert("Tuesday");
            break;
        case 4:
            alert("Wednesday");
            break;
        case 5:
            alert("Thursday");
            break;
        case 6:
            alert("Friday");
            break;
        case 7:
            alert("Saturday");
            break;
        case 8:
            alert("Sunday");
            break;
        default:
            alert("So ban nhap khong hop le!");
    }
})

// Bai 5
let btnAction5 = document.getElementById("btn-action-5");
btnAction5.addEventListener("click", () => {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);

    if (n1 >= n2 && n1 >= n3) {
        alert(`So lon nhat la ${n1}`);
    } else if (n2 >= n1 && n2 >= n3) {
        alert(`So lon nhat la ${n2}`);
    } else {
        alert(`So lon nhat la ${n3}`);
    }
})
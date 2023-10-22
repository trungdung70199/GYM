let btnUpdate = document.getElementById("btn-update");
btnUpdate.addEventListener('click', () => {
    // weight
    let weight = parseFloat(prompt(document.getElementById("weight").value));
    // height
    let height = parseFloat(prompt(document.getElementById("height").value));
    // BMI
    let BMI = weight / (height * height);
    // if - else if - else
    // BMI < 16
    if (BMI < 16) {
        alert('Gay cap do 3');
    } else if (BMI < 17) {
        alert('Gay cap do 2');
    } else if (BMI < 18.5) {
        alert('Gay cap do 1');
    } else if (BMI < 25) {
        alert('Binh thuong');
    } else if (BMI < 30) {
        alert('Thua can');
    } else if (BMI < 35) {
        alert ('Beo phi do 1');
    } else if (BMI < 40) {
        alert('Beo phi do 2');
    } else {
        alert('Beo phi do 3');
    }
    let demoElem = document.getElementById("demo");
    demoElem.innerHTML =`${BMI}`;
})

// function calculateBMI() {
//     var weight = parseFloat(document.getElementById("weight").value);
//     var height = parseFloat(document.getElementById("height").value);
//     var result = document.getElementById("result");

//     if (!isNaN(weight) && !isNaN(height)) {
//         var bmi = weight / (height * height);

//         var interpretation = "";
//         if (bmi < 16) {
//             interpretation = "Gầy độ 3";
//         } else if (bmi < 17) {
//             interpretation = "Gầy độ 2";
//         } else if (bmi < 18.5) {
//             interpretation = "Gầy độ 1";
//         } else if (bmi < 25) {
//             interpretation = "Bình thường";
//         } else if (bmi < 30) {
//             interpretation = "Thừa cân";
//         } else if (bmi < 35) {
//             interpretation = "Béo phì độ 1";
//         } else if (bmi < 40) {
//             interpretation = "Béo phì độ 2";
//         } else {
//             interpretation = "Béo phì độ 3";
//         }

//         result.innerHTML = "Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "<br>Diễn giải: " + interpretation;
//     } else {
//         result.innerHTML = "Vui lòng nhập cân nặng và chiều cao hợp lệ.";
//     }
// }
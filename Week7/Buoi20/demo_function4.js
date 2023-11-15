// Viet ham isValidAge() nhan vao nam sinh va kiem tra
// xem ng dung du 18 tuoi hay chua
// Tra ket qua ve ve chuong trinh chinh

yearOfBirth = 2005;

function isValidAge(yearOfBirth) {
    var currentYear = new Date().getFullYear();
    console.log(`Current year: ${currentYear}`);
    var result;
    if (currentYear - yearOfBirth >= 18) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

let testAgeResult = isValidAge(yearOfBirth);
console.log(testAgeResult);

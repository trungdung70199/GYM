// Viết hàm solveEquation() để giải phương trình 
// bậc nhất ax + b = 0 với a và b là 2 tham số đầu vào.

// function solveEquation(a, b) {
//     const x = -b / a;
//     console.log(x);
// }

function solveEquation(a, b) {
    if (a==0) {
      if (b==0) {
        console.log("phuong trinh co vo so nghiem");
      } else {
        console.log("Phuong trinh vo nghiem");
      }
    } else {
      console.log(`Phuong trinh co nghiem duy nhat x = ${-b/a}`);
    }
  }

solveEquation(2, -4);
solveEquation(0, 0);
solveEquation(0, -4);
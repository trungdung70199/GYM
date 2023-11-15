/**
 * Bài 1:
    Viết hàm sumEven() nhận vào một số `n` và in ra tổng các số chẵn từ 2 đến n.
    Ví dụ:
    sumEven(10)

    Output:
    30
 */
    function sumEven(n) {
      // nhap vao so duong
      if (n <= 1 || !Number.isInteger(n)) {
        console.log("Nhap so duong");
        return;
      }
    
      let sum = 0;
    
      for (let i = 2; i <= n; i += 2) {
        sum += i;
      }
    
      console.log(`Tong so cac so chan tu 2 den ${n} là: ${sum}`);
    }    
    // sum
    sumEven(10);
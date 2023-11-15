/**
 * Bài 2: Viết hàm transformStr() nhận vào tham số string và 
 * in ra string ở dạng uppercase và lowercase. Ví dụ: 
 * 
 * transformStr('Function Is Magic!')
 * 
 * Output:
 * Lowercase: function is magic!
 * Uppercase: FUNCTION IS MAGIC!
 */
function transformStr(inputStr) {
    // Chi input vao string
    if (typeof inputStr !== 'string') {
      console.log('Input string');
      return;
    }
  
    const uppercaseStr = inputStr.toUpperCase();
    const lowercaseStr = inputStr.toLowerCase();
  
    console.log('Dang UPPERCASE:', uppercaseStr);
    console.log('Dang lowercase:', lowercaseStr);
  }
  
  transformStr('Function Is Magic!');
  
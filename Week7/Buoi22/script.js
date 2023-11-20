let canvas  = document.getElementById("sample-canvas");
let context = canvas.getContext("2d");
/// hcn
context.fillStyle = "blue";
context.fillRect(200, 200, 200, 100);

// htron
// Toa do (x, y) ban kinh 40, Goc bat dau, goc ket thuc
context.fillStyle = "green"
context.beginPath();
// context.arc(95, 50, 40, 0, 2 * Math.PI);
context.arc(95, 50, 40, Math.PI, 2 * Math.PI);
// context.stroke();
context.fillStyle();

context.beginPath();
context.arc(395, 150, 60, Math.PI, 2 * Math.PI);
context.fill();
// context.stroke();

// text
context.font = "300px Arial";
context.fillText("Hello", 250, 350);

// Image

window.onload = function() {
    const canvas = document.getElementById("sample-canvas");
    const ctx = canvas.getContext("2d");
    const img = document.getElementById("scream");
    ctx.drawImage(img, 10, 10);
  };
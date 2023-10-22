function FruitPrice() {
    var fruitName = document.getElementById("fruitName").value.toLowerCase(); 
    // Khai bao bgia
    var fruitPrice;

    // Su dung switch-case 
    switch (fruitName) {
        case "ổi":
        case "dưa hấu":
            fruitPrice = 20000;
            break;
        case "táo":
        case "xoài":
            fruitPrice = 30000;
            break;
        case "cam":
        case "chôm chôm":
            fruitPrice = 40000;
            break;
        case "măng cụt":
            fruitPrice = 50000;
            break;
        default:
            fruitPrice = "Not Found";
    }
    // Output cost
    document.getElementById("result").innerHTML = `Gia cua ${fruitName} la: ${fruitPrice} VNĐ/kg`;
}
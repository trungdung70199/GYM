let btnAction = document.getElementById("btn-action");
btnAction.addEventListener("click", () => {
    let billValue = parseFloat(document.getElementById("bill-value").value);
    // console.log(typeof(billValue));
    // billValue > 4000000
    if (billValue >= 4000000) {
        alert(`Ban da dc giam gia ${billValue * 0.2}VND`);
        // <Cap nhat lai gia tri don hang
        billValue *= 0.8;
    } else if (billValue >= 2500000){
        alert(`Ban da dc giam gia ${billValue * 0.15}VND`); 
        billValue *= 0.85;
    } else if (billValue >= 1500000){
        alert(`Ban da dc giam gia ${200000}VND`);
        billValue -= 200000
        //billValue
    } else {
        alert(`Ban khong nhan duoc giam gia!!!`)
    }

    let infoElem = document.getElementById("info");
    infoElem.innerText = `Ban can thanh toan ${billValue} VND`;
});

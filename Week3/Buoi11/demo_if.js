let btnAction = document.getElementById("btn-action");
btnAction.addEventListener("click", () => {
    let billValue = parseFloat(document.getElementById("bill-value").value);
    // console.log(typeof(billValue));
    if (billValue >= 2000000) {
        alert(`Ban da dc giam gia ${billValue * 0.1}`);
        // Cap nhat lai gia tri don hang
        billValue *= 0.9;
    }
    let infoElem = document.getElementById("info");
    infoElem.innerHTML = `Ban can thanh toan ${billValue} VND`;
});

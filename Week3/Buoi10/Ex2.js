let btnUpdate = document.getElementById("btn-update");
// Add event
btnUpdate.addEventListener('click', () => {
    alert("Button update is clicked");
    console.log("Button is clicked");
    // Change Color
    let HeadColor = document.getElementById("head1");
    HeadColor.style.color = "red";
    // Move tropical
    let trop = document.getElementById("Trop");
    trop.remove();
    //add Fruit Yogurt
    let newYogurt = document.createElement("li");
    newYogurt.innerText = "Fruit Yogurt";
    let Yogurt = document.getElementById("Drink-list");
    Yogurt.appendChild(newYogurt);
});


class Vehicle {
    // Add vehicle id
    constructor(vehicleId, ownerName, vehicleType, cylinderCapacity, cost) {
        this.vehicleId = vehicleId;
        this.ownerName = ownerName;
        this.vehicleType = vehicleType;
        this.cylinderCapacity = cylinderCapacity;
        this.cost = cost;
    }

    taxValue() {
        let taxValue = 0;

        if (this.cylinderCapacity < 100) {
            taxValue = 0.01 * this.cost;
        } else if (this.cylinderCapacity >= 100 && this.cylinderCapacity <= 200) {
            taxValue = 0.03 * this.cost;
        } else {
            taxValue = 0.05 * this.cost;
        }

        return taxValue;
    }

    showInfo() {
        console.log('------------------');
        console.log(`Vehicle ID: ${this.vehicleId}`);
        console.log(`Owner name: ${this.ownerName}`);
        console.log(`Vehicle type: ${this.vehicleType}`);
        console.log(`Cylinder capacity: ${this.cylinderCapacity}`);
        console.log(`Cost: ${this.cost}`);
        console.log(`Tax value: ${this.taxValue()}`);
        console.log('------------------');
    }
}

// const Vehicle1 = new Vehicle('Kitty', 'Motorcycle', 50, 10000);
// const Vehicle2 = new Vehicle('Nguyen', 'Truck', 120, 30000);
// const Vehicle3 = new Vehicle('Dung', 'Car', 300, 50000);

// Vehicle1.showInfo();
// Vehicle2.showInfo();
// Vehicle3.showInfo();

function addVehicle() {
    // Update addVehicle()
    let vehicleId = document.getElementById("vehicle-id").value;
    let ownerName = document.getElementById("owner-name").value;
    let vehicleType = document.getElementById("vehicle-type").value;
    let cylinderCapacity = parseInt(document.getElementById("cylinder-capacity").value);
    let cost = parseFloat(document.getElementById("cost").value);
    
    let newVehicle = new Vehicle(vehicleId, ownerName, vehicleType, cylinderCapacity, cost);
    vehicleArray.push(newVehicle);

    alert("Vehicle is added successfully!");
    console.log(vehicleArray);

    updateVehicleTable(vehicleArray);
}

function searchVehicle() {
    let searchID = document.getElementById("search-value").value;
    for (let i in vehicleArray) {
        let vehicle = vehicleArray[i];
        if (vehicle.vehicleId == searchID) {
            vehicle.showInfo();
            alert(`Owner Name: ${vehicle.ownerName}, vehicle type: ${vehicle.vehicleType}, tax value: ${vehicle.taxValue()}`);
            break;
        }
    }
}

function deleteVehicle() {
    let searchID = document.getElementById("search-value").value;
    for (let i in vehicleArray) {
        let vehicle = vehicleArray[i];
        if (vehicle.vehicleId !== searchID) {
            vehicle.showInfo();
            // alert(`Owner Name: ${vehicle.ownerName}, vehicle type: ${vehicle.vehicleType}, tax value: ${vehicle.taxValue()}`);
            alert("Delete Successfully");
            break;
        }
    }
}

function updateVehicle() {
    let vehicleId = document.getElementById("vehicle-id").value;
    let ownerName = document.getElementById("owner-name").value;
    let vehicleType = document.getElementById("vehicle-type").value;
    let cylinderCapacity = parseInt(document.getElementById("cylinder-capacity").value);
    let cost = parseFloat(document.getElementById("cost").value);

    for (let i in vehicleArray) {
        let vehicle = vehicleArray[i];
        if(vehicle.vehicleId == vehicleId) {
            vehicle.ownerName = ownerName;
            vehicle.vehicleType = vehicleType;
            vehicle.cylinderCapacity = cylinderCapacity;
            vehicle.cost = cost;
            alert("Vehicle is update successfully!");
            updateVehicle(vehicleArray);
            break;
        }
    }
}

// Update vehicle table based on data array
function updateVehicleTable(data) {
    let tableElem = document.getElementById("vehicle-table");
    tableElem.remove();
    // Create new table
    let newTableElem = document.createElement("table");
    // Create heading row
    let RowElem = document.getElementById("tr");

    let heading1 = document.getElementById("th");
    let heading2 = document.getElementById("th");
    let heading3 = document.getElementById("th");
    let heading4 = document.getElementById("th");
    let heading5 = document.getElementById("th");
    let heading6 = document.getElementById("th");

    heading1.innerText = "No.";
    heading2.innerText = "Owner Name";
    heading3.innerText = "Vehicle Type";
    heading4.innerText = "Cylinder Capacity";
    heading5.innerText = "Cost";
    heading6.innerText = "Tax Value";

    newRowElem.appendChild(heading1);
    newRowElem.appendChild(heading2);
    newRowElem.appendChild(heading3);
    newRowElem.appendChild(heading4);
    newRowElem.appendChild(heading5);
    newRowElem.appendChild(heading6);

    // append row to table
    newTableElem.appendChild(newRowElem);

    // add data row
    for (let i in data) {
        let vehicle = data[i];
        newRowElem = document.createElement("tr");
        let info1 = document.createElement("td");
        let info2 = document.createElement("td");
        let info3 = document.createElement("td");
        let info4 = document.createElement("td");
        let info5 = document.createElement("td");
        let info6 = document.createElement("td");

        info1.innerText = i;
        info2.innerText = vehicle.ownerName;
        info3.innerText = vehicle.vehicleType;
        info4.innerText = vehicle.cylinderCapacity;
        info5.innerText = vehicle.cost;
        info6.innerText = vehicle.taxValue();

        newRowElem.appendChild(info1);
        newRowElem.appendChild(info2);
        newRowElem.appendChild(info3);
        newRowElem.appendChild(info4);
        newRowElem.appendChild(info5);
        newRowElem.appendChild(info6);

        newTableElem.appendChild(newTableElem);
    }
    document.body.appendChild(newTableElem);
}

let vehicleArray = [];
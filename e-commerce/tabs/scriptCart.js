const fatherList = document.querySelector("[father-add]");
let info = localStorage.getItem("name");
let value = localStorage.getItem("price");
let iteration = JSON.stringify(info).replace('"',"").replace('"',"").split(",");
let priceArray = JSON.stringify(value).replace('"',"").replace('"',"").split(",");
let sum = 0;
console.log(iteration);
console.log(priceArray);

iteration.forEach(element => {
    let item = document.createElement("li");
    item.classList.add("list-group-item");
    item.textContent = element;
    fatherList.append(item);
});

priceArray.forEach(element => { sum = sum+parseInt(element); });
console.log(sum);
let priceContainer = document.getElementById("precio-total");
priceContainer.textContent = "Precio: $"+sum;



let allMobiles = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb",

    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
];
const allCategory = document.getElementById("allCategory");
const formselectors = document.getElementById("my-form");
const singleObje = allMobiles[0];
let dropdownValue = 'brand';
let listHtml = '';

function updateinputPlaceholder() {
    console.log(this.value);
    document.getElementById("input-field").placeholder = 'Please select ' + this.value;
    dropdownValue = this.value;
}


// get all keys in dropdown
Object.keys(singleObje).forEach(function (key) {
    const option = document.createElement("option");
    option.textContent = key;
    allCategory.appendChild(option);
});

allCategory.addEventListener("change", updateinputPlaceholder);

const selectedValue = allCategory.options[allCategory.selectedIndex].value;
formselectors.addEventListener("submit", function (input) {
    input.preventDefault();
    const inputVal = document.getElementById("input-field").value;
    // console.log(inputVal);

    const mobilesFilter = allMobiles.filter((mobile) => {
        // console.log('first:' + inputVal, 'Sec:' + mobile[dropdownValue]);
        return mobile[dropdownValue].toLowerCase() === inputVal.toLowerCase().toString();
    });
    console.log('mobilesFilter', mobilesFilter.length);
    if (mobilesFilter.length > 0) {
        mobilesFilter.map(function (data_val) {
console.log('dropdownValue',dropdownValue);

            const {brand, model, price, camera, ram, rom} = data_val;
            listHtml += `<div class="col-sm-3 mb-3"><ul class="list-group">
                              <li class="list-group-item ${dropdownValue === 'model' && 'active'}">${model}</li>
                              <li class="list-group-item ${dropdownValue === 'price' && 'active'}">Price : ${price}</li>
                              <li class="list-group-item ${dropdownValue === 'brand' && 'active'}">Brand : ${brand}</li>
                              <li class="list-group-item ${dropdownValue === 'camera' && 'active'}">Camera : ${camera}</li>
                              <li class="list-group-item ${dropdownValue === 'ram' && 'active'}">RAM : ${ram}</li>
                              <li class="list-group-item ${dropdownValue === 'rom' && 'active'}">ROM : ${rom}</li>
                            </ul></div>`;
        });
    }else{
        listHtml = '<p class="--bs-danger-bg-subtle">Your have no Result</p>';
    }

    document.getElementById('all-cards').innerHTML = listHtml;
    listHtml = '';

});




// Update all cost

function updateAllCost(product, price) {
    const costProductInput = document.getElementById(product + '-cost');
    let costProduct = costProductInput.innerText;
    costProduct = price;
    costProductInput.innerText = costProduct;


    // calculate Total Cost

    calculateTotalCost();


}


function calculateTotalCost() {

    const memoryCostInput = document.getElementById('memory-cost').innerText;
    let memoryCost = parseFloat(memoryCostInput);

    const storageCostInput = document.getElementById('storage-cost').innerText;
    let storageCost = parseFloat(storageCostInput);

    const deliveryCostInput = document.getElementById('delivery-cost').innerText;
    let deliveryCost = parseFloat(deliveryCostInput);

    totalPrice = 1299 + memoryCost + storageCost + deliveryCost;

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total').innerText = totalPrice;




}
// pomocode

function verifyPomoCode() {

    calculateTotalCost();

    const pomoCode = 'stevekaku';

    let input = document.getElementById('input-code');
    let inputCode = input.value;
    if (pomoCode == inputCode) {

        const discountPrice = totalPrice / 5;
        let newPrice = totalPrice - discountPrice;

        document.getElementById('total-price').innerText = newPrice;
        document.getElementById('total').innerText = newPrice;
    }

    else {

        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('total').innerText = totalPrice;
    }
    input.value = '';


}

// memory
document.getElementById('8Gb memory').addEventListener('click',
    function () {

        updateAllCost('memory', 0);


    });

document.getElementById('16Gb memory').addEventListener('click',
    function () {

        updateAllCost('memory', 180);


    });

// storage

document.getElementById('256Gb SSD').addEventListener('click',
    function () {

        updateAllCost('storage', 0);


    });
document.getElementById('512Gb SSD').addEventListener('click',
    function () {

        updateAllCost('storage', 100);


    });
document.getElementById('1TB SSD').addEventListener('click',
    function () {

        updateAllCost('storage', 200);


    });

// delivery charge


document.getElementById('no-emergency').addEventListener('click',
    function () {

        updateAllCost('delivery', 0);


    });
document.getElementById('emergency-delivery').addEventListener('click',
    function () {

        updateAllCost('delivery', 20);


    });







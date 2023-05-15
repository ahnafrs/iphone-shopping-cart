function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }

    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-Total')
    productTotal.innerText = productNumber * price;
    calculateTotal();

}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const taxTotal = subtotal / 10;
    const totalAmount = subtotal + taxTotal;

    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-total').innerText = taxTotal;
    document.getElementById('total-amount').innerText = totalAmount;

}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})


// calculate total quantity.
function updateElementValue(inputId, isIncrease) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);

    let newValue;
    if (isIncrease === true) {
        newValue = inputFieldValue + 1;
        inputField.value = newValue;
    }
    else {
        newValue = inputFieldValue - 1;
        inputField.value = newValue;
    }
    return newValue;
}
//calculate total quantity price.
function updatePrice(inputId, value, isIncrease) {
    const prePrice = document.getElementById(inputId);
    let newAmount;
    if (isIncrease === true) {
        newAmount = value * 1219;
        prePrice.innerText = newAmount;
    }
    else {
        newAmount = value * 59;
        prePrice.innerText = newAmount;
    }
}
// set element value by getelementbyid.
function setElementValue(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
//get subtotal price
function getTotalPrice(inputId) {
    const phonePrice = document.getElementById(inputId);
    const phonePriceTotal = parseFloat(phonePrice.innerText);
    return phonePriceTotal;
}
// calculate total price
function calculateTotalPrice() {
    const phonePrice = getTotalPrice('phone-total-price');
    const casePrice = getTotalPrice('case-total-price');
    const subTotalPrice = phonePrice + casePrice;
    setElementValue('sub-total', subTotalPrice);

    //calculate tax
    const totalTaxAmount = (subTotalPrice * 0.1).toFixed(2);
    const totalTax = parseFloat(totalTaxAmount);
    setElementValue('tax-total', totalTax);

    //calculate total amount with tax and sub total
    const totalAmount = subTotalPrice + totalTax;
    setElementValue('total', totalAmount);
}
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const fieldValue = updateElementValue('input-phone-field', true);

    updatePrice('phone-total-price', fieldValue, true);

    calculateTotalPrice();
});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const fieldValue = updateElementValue('input-phone-field', false);

    updatePrice('phone-total-price', fieldValue, true);

    calculateTotalPrice();
});
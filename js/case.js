document.getElementById('btn-case-plus').addEventListener('click', function () {
    const fieldValue = updateElementValue('input-case-field', true);

    updatePrice('case-total-price', fieldValue, false);

    calculateTotalPrice();
});

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const fieldValue = updateElementValue('input-case-field', false);

    updatePrice('case-total-price', fieldValue, false);

    calculateTotalPrice();
});
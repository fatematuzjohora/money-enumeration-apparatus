function getElement(id) {
    const allCostingInput = document.getElementById(id).value;


    // error handle

    if (allCostingInput == '') {
        return alert('please fill the all criteria')
    }
    else if (allCostingInput < 0) {
        return alert('please give positive value')

    }
    else if (isNaN(allCostingInput)) {

        return alert('please give float number')

    }

    return allCostingInput;




}

// ---------costing------------

document.getElementById('calculate-btn').addEventListener('click', function () {
    const userIncome = getElement('total-income');
    const totalOutlay = document.getElementById('total-outlay');
    const foodCost = getElement('food-cost');
    const rentCost = getElement('rent-cost');
    const clothCost = getElement('cloth-cost');
    const allItemCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
    totalOutlay.innerText = allItemCost;

    const newBalance = document.getElementById('new-balance');
    const restBalance = userIncome - allItemCost;
    newBalance.innerText = restBalance;
    console.log(restBalance);

});
// saving part
document.getElementById('save-btn').addEventListener('click', function () {
    const incomeInput = getElement('total-income');
    const savingInput = getElement('save-info');
    const savedBalance = (incomeInput * savingInput) / 100;
    const recentSaving = document.getElementById('recently-save');
    recentSaving.innerText = savedBalance;
    const previousBalance = document.getElementById('new-balance').innerText;
    const remainingBalance = document.getElementById('remaining-balnace');
    const updateBalance = previousBalance - savedBalance;
    remainingBalance.innerText = updateBalance;

})
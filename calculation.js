function calculation(number) {

    let FoodExpenses = document.getElementById("Food-expenses");
    let RentExpenses = document.getElementById("Rent-expenses");
    let ClothesExpenses = document.getElementById('Clothes-expenses');
    const currentTotalExpenses = document.getElementById("Total-expenses");
    const balance = document.getElementById("balance");
    const income = document.getElementById("income");
    const savingRate = document.getElementById("saving-rate")
    const savingAmount = document.getElementById("saving-amount")
    const remainingBalance = document.getElementById("remaining-balance")
    if (number == true) {
        // error handle part
        if (parseFloat(FoodExpenses.value) < 0 || parseFloat(RentExpenses.value) < 0 || parseFloat(ClothesExpenses.value) < 0 || parseFloat(income.value) < 0) {
            alert('Please Enter positive number');
            FoodExpenses.value = "";
            RentExpenses.value = "";
            ClothesExpenses.value = "";
            income.value = "";
        }
        if (isNaN(parseFloat(FoodExpenses.value)) || isNaN(parseFloat(RentExpenses.value)) || isNaN(parseFloat(ClothesExpenses.value)) || isNaN(parseFloat(income.value))) {
            alert('Please do not enter any string');
            FoodExpenses.value = "";
            RentExpenses.value = "";
            ClothesExpenses.value = "";
            income.value = "";
        }
        // calculation
        else {
            const totalExpenses = parseFloat(FoodExpenses.value) + parseFloat(RentExpenses.value) + parseFloat(ClothesExpenses.value);
            currentTotalExpenses.innerText = totalExpenses;
            const CurrentBalance = parseFloat(income.value) - parseFloat(currentTotalExpenses.innerText);
            if (CurrentBalance < 0) {
                alert('opps!!! sorry Your expenses is greater than your income');
                currentTotalExpenses.innerText = "0";
            } else {
                balance.innerText = CurrentBalance;
            }


        }
    }
    //saving part

    if (number == false) {
        const saving = (parseFloat(savingRate.value) / 100) * parseFloat(income.value);
        if (saving > parseFloat(balance.innerText)) {
            alert('Saving not possible because you have not sufficient balance');
            savingAmount.innerText = 0;
            remainingBalance.innerText = balance.innerText;
        }
        else {
            savingAmount.innerText = saving;
            const remaining = parseFloat(balance.innerText) - saving;
            remainingBalance.innerText = remaining;
        }
    }


}




document.getElementById('Calculatebtn').addEventListener('click', function () {

    calculation(true);
});

document.getElementById("saving-btn").addEventListener("click", function () {
    calculation(false);
})
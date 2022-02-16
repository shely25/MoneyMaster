function calculation() {

    let FoodExpenses = document.getElementById("Food-expenses");
    let RentExpenses = document.getElementById("Rent-expenses");
    let ClothesExpenses = document.getElementById('Clothes-expenses');
    const Total = document.getElementById("Total-expenses");
    const balance = document.getElementById("balance");
    const income = document.getElementById("income");

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
    else {
        const totalExpenses = parseFloat(FoodExpenses.value) + parseFloat(RentExpenses.value) + parseFloat(ClothesExpenses.value);
        Total.innerText = totalExpenses;
        const CurrentBalance = parseFloat(income.value) - parseFloat(Total.innerHTML);
        if (CurrentBalance < 0) {
            alert('opps!!! sorry Your expenses is greater than your income');
        } else {
            balance.innerText = CurrentBalance;
        }


    }


}




document.getElementById('Calculatebtn').addEventListener('click', function () {

    calculation();
});
// problem:1


function anaToVori(ana) {

    if (typeof ana != 'number') {
        return 'Please give a number.';
    }
    if (ana < 0) {
        return 'Please give a positive number.';
    }

    let totalVori = ana / 16;
    return totalVori;

}

const givenAna = 2500;
let voriAmount = anaToVori(givenAna);
console.log(voriAmount);


// problem: 2


function pandaCost(singaraQuantity, chomosaQuantity, jilapiQuantity) {


    if (typeof singaraQuantity != 'number' || typeof chomosaQuantity != 'number' || typeof jilapiQuantity != 'number') {
        return 'Please give a number.';
    }
    if (singaraQuantity < 0 || chomosaQuantity < 0 || jilapiQuantity < 0) {
        return 'Please give a positive number.';
    }

    const singaraPrice = 7;
    const chomosaPrice = 10;
    const jilapiPrice = 15;
    const totalSingaraPrice = singaraQuantity * singaraPrice;
    const totalChomosaPrice = chomosaQuantity * chomosaPrice;
    const totalJilapiPrice = jilapiQuantity * jilapiPrice;

    const totalPrice = totalSingaraPrice + totalChomosaPrice + totalJilapiPrice;
    return totalPrice;
}
const checkoutPrice = pandaCost(5, 4, 7);
console.log(checkoutPrice);


// problem: 3


function picnicBudget(individual) {
    const first100Amount = 5000;
    const second100Amount = 4000;
    const remainingindividualAmount = 3000;

    if (typeof individual != 'number') {
        return 'Please give a number.';
    }
    if (individual < 0) {
        return 'Please give a positive number.';
    } else {
        if (individual <= 100) {
            const totalAmount = individual * first100Amount;
            return totalAmount;
        } else if (individual <= 200) {
            const first100Budget = 5000 * 100;
            const remainingindividual = individual - 100;
            const second100Budget = remainingindividual * second100Amount;
            const totalAmount = first100Budget + second100Budget;
            return totalAmount;
        } else {
            const first100Budget = 5000 * 100;
            const second100Budget = 4000 * 100;
            const remainingindividual = individual - 200;
            const remainingBudget = remainingindividual * remainingindividualAmount;
            const totalAmount = first100Budget + second100Budget + remainingBudget;
            return totalAmount;
        }
    }

}

const totalBudget = picnicBudget(482);
console.log(totalBudget);



// problem: 4


function oddFriend(totalFriend) {

    if (typeof totalFriend != 'object') {
        return 'Please give array of strings.';
    }

    for (let i = 0; i < totalFriend.length; i++) {
        const selectedName = totalFriend[i];
        if (selectedName.length % 2 != 0) {
            return selectedName;
        }
    }

}
const frienList = ['raisa', 'rahib', 'mubarok', 'mahmus', 'masud', 'farhad'];
const selectedFriend = oddFriend(frienList);
console.log(selectedFriend);
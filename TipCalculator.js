const billAmount = 32; 
const tipAmount = 0.1; 
let statement;

function tipCalc() {
    let sumTotal = (billAmount * tipAmount) + billAmount;
    let statement = `Your total bill, with tip, is £${sumTotal.toFixed(2)}`;
    console.log(statement)
}

tipCalc();
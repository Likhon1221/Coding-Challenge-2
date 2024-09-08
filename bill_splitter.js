// 1. Calculate the Tip

let bill = 200;
let tip;

if(bill >= 50 && bill <= 300) 
    {tip = bill * .15;}
else{tip = bill * .20;}

// 2. Output Details

let total = bill + tip;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${total}`);

// 3. Create a Function

function calculateTip(bill) 
{let tip;
    if(bill >= 50 && bill <=300)
    {tip = (bill) * .15;}
    else {tip = (bill) * .20;}  
    return tip}

bill = 100;
tip = calculateTip(bill);
total = bill + tip

console.log(`The bill was $${bill}, the tip was $${tip} and the total value is $${total}`);
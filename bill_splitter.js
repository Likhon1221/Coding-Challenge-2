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

// 4. Utilize Arrays
// Data set 1

let bills = [275,40,430];
console.log("Bills:", bills);

let tips = bills.map(bill => calculateTip(bill));
console.log("Tips:", tips);

let totals = bills.map((bills, index) => bills + tips[index]);
console.log("Totals:", totals);

bills.forEach((bill, index) => {let tip = tips[index];
                                let total = bill + tip;
console.log(`The bill was $${bill}, the tip was $${tip} and the total value is $${total}`)})

// 5. Data Set 5

bills = [125,555,44];
console.log("Bills:", bills);

tips = bills.map(bill => calculateTip(bill));
console.log("Tips:", tips);

 totals = bills.map((bills, index) => bills + tips[index]);
console.log("Totals:", totals);

bills.forEach((bill, index) => {let tip = tips[index];
                                let total = bill + tip;
console.log(`The bill was $${bill}, the tip was $${tip} and the total value is $${total}`)})
const products = [
    { name: 'Apple', price: 0.5, quantity: 10 },
    { name: 'Banana', price: 0.3, quantity: 20 },
    { name: 'Orange', price: 0.6, quantity: 15 },
];
let totalSales=[];
products.forEach(p=>totalSales.push(p.price * p.quantity));

let sum = totalSales.reduce((accumulator, currentValue) =>  accumulator + currentValue,0);

console.log(sum);


const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000 },
    { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
    { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
    { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
    { make: 'Ferrari', model: 'SF90 Stradale:', year: 2020, mileage: 13000 },
  ];

  //Find all the cars milage with mapping

 let milages=cars.map(c=>c.mileage);

let milageLength=milages.length;

console.log(milages);


let sum = milages.reduce((accumulator ,item) => accumulator += item, 0)
console.log(sum);
  console.log(sum);
//find average
let average=sum/milageLength;

console.log(average);

//Highest car milage 
let max_milage=Math.max(...milages);

console.log(max_milage);

//Lowest car milage 
let min_milage=Math.min(...milages);

// console.log(min_milage);
//lowest mileage car
let lowestMileageCar=cars.filter(c=>c.mileage===min_milage);
if(lowestMileageCar.length>1){
   let lowestMilaegeCars=lowestMileageCar.map(l=>l.make);
   lowestMilaegeCars.forEach(a=>{
    console.log(a);
   });
}else{
    
    // let obj = Object.assign({}, lowestMileageCar);
    // console.log(obj[0].make);
    console.log(lowestMileageCar[0].make);
}

//lowest mileage car
let highestCarMilaege=cars.filter(c=>c.mileage===max_milage);
if(highestCarMilaege.length>1){

    let highestCarMilaege=highestCarMilaege.map(l=>l.make);
    lowestMilaegeCars.forEach(a=>{
    console.log(a);
    }
)
}else{
    console.log(highestCarMilaege[0].make);
};
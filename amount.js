const MileageCost = (Distance, Mileage, FuelPrice) =>Math.ceil((Distance / Mileage) * FuelPrice);

console.log(`******_________Amount need for the required fuel is Rs. ${MileageCost(330, 12, 110.08)}___________******`)
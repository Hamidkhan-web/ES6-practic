//2 arrow aksat korar old sistem
const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 24];
const ages3 = [24, 28, 36, 29];

const allAges = ages.concat(ages2) .concat([6]).concat(ages3);
//2 arrow aksat korar new sistem1
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);




const business = 650;
const minister = 900;
const sochib = 250;
const takaPoicha = [650, 900, 250];
const maximum = Math.max(...takaPoicha);
//const maximum = Math.max(business, minister, sochib);
console.log(maximum);
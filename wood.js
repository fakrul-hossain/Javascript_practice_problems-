/*
fixed : per item wood requirements
1. chair ---> 3cft
2. table ---> 10 cft
3. bed ---> 50 cft
vary : quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;
    /* console.log('total chair wood :',chairWood);
    console.log('total table wood :',tableWood);
    console.log('total bed wood :',tableWood); */

    totalWood = chairWood + tableWood + bedWood;
    return totalWood;
  // console.log(chairQuantity, tableQuantity, bedQuantity);
}

const totalWood = woodCalculator(2, 3, 1);

console.log('total wood required:', totalWood);

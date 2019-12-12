const massAllPeople = [];
const N = 500; // кількість елементів в масиві чисел

for (let i = 0; i < N; i++) {
  massAllPeople.push(Math.round(Math.random() * 16384)) //2 в 14 степені = 16384
}

function singleMen() { //неодружені чоловіки з вищою освітою та молодше 30 років
  return massAllPeople.filter((n) => (n & 1) && (n & 2) === 0 && ((n >> 2) & 0b1111111) < 30 && ((n >> 13) & 1));
}

function marriedWoman() { //одружені жінки в яких 3 і більше дитини
  return massAllPeople.filter((n) => (n & 1) === 0 && (n & 2) && ((n >> 9) & 0b1111) >= 3);
}

function singleWoman() { //неодружених жінки у віці від 25 (включно) до 30 (включно) з вищою освітою і без дітей
  return massAllPeople.filter((n) => (n & 1) === 0 && (n & 2) === 0 && ((n >> 2) & 0b1111111) >= 25 && ((n >> 2) & 0b1111111) <= 30 && ((n >> 9) & 0b1111) === 0 && ((n >> 13) & 1));
}

singleMen();
marriedWoman();
singleWoman();
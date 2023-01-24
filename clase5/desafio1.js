// const quantity = 10000;

// const obj = {};

// for (let i = 1; i <= 20; i++) {
//   obj[i] = 0;
// }

// const getRandomNumber = (min, max) => {
//   const minFormat = Math.ceil(min);
//   const maxFormat = Math.ceil(max);
//   return Math.floor(Math.random() * (maxFormat - minFormat) + minFormat);
// };

// for (let i = 0; i < quantity; i++) {
//   const randomNumber = getRandomNumber(1, 20);
//   obj[randomNumber]++;
// }

// console.log(obj);

const obj = {};

for(let i = 0; i < 10000; i++) {
    const number = Math.floor(Math.random()*20+1);
    if(!obj[number]) obj[number] = 1
    else obj[number]++;
};

console.log(obj);
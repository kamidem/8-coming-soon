const sum = (a, b) => a+ b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const matematika = {
  sudeti: sum,
  atimti: minus,
  dauginti: multiply,
  padalinti: divide,
  sum: sum,
  minus: minus,
  multiply: multiply,
  divide: divide
}
//galima keliom kalbom parasyti, kad butu pasiekiame skirtingais raktazodziais

// export {
//   sum,
//   minus,
//   multiply,
//   divide
// }

export {matematika};
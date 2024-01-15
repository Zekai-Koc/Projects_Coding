function countPositivesSumNegatives(input) {
   const result = [];

   if (input === null || input == []) return [];

   const totalNumberOfPositive = input.filter((element) => element > 0);
   const negativeArray = input.filter((element) => element < 0);
   const totalNegative = negativeArray.reduce((acc, cur) => acc + cur, 0);

   result.push(totalNumberOfPositive.length);
   result.push(totalNegative);
   return result;
}

console.log(
   countPositivesSumNegatives([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
   ])
);

console.log(
   countPositivesSumNegatives([
      0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
   ])
);

function fakeBin(x) {
   const newArray = x
      .split("")
      .map((element) => (element < 5 ? 0 : 1))
      .join("");

   return newArray;
}

console.log(fakeBin("45385593107843568"));

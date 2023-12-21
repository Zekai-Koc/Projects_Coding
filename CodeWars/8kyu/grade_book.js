function getGrade(s1, s2, s3) {
   const average = (s1 + s2 + s3) / 3;
   let averageLetter = "F";

   if (average > 90) {
      averageLetter = "A";
   } else if (average >= 80) {
      averageLetter = "B";
   } else if (average >= 70) {
      averageLetter = "C";
   } else if (average >= 60) {
      averageLetter = "D";
   } else {
      averageLetter = "F";
   }

   return averageLetter;
}

console.log(getGrade(95, 90, 93));

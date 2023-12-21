function DNAtoRNA(dna) {
   return dna.replaceAll("T", "U");
}

console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("TTTT"));

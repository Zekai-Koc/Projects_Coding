function findNeedle(haystack) {
   const index = haystack.findIndex((element) => element === "needle");
   return `found the needle at position ${index}`;
}

// findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);
console.log(
   findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);

console.log(
   findNeedle([
      "3",
      "123124234",
      undefined,
      "needle",
      "world",
      "hay",
      2,
      "3",
      true,
      false,
   ])
);

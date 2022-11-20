let set1 = new Set();
while (set1.size < 4) {
  set1.add(Math.round(Math.random() * 10))
}
console.log(set1)
if (set1.has(8)) {
  console.log("The created set has 8 in it");
} else {
  console.log("The created set doesn't have 8 in it");
}


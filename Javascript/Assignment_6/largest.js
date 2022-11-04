function find_largest(n) {
  let arr = [3, 45, 6, 7, 23, 5, 7, 8];
  let arr1 = [];
  let dummy = [3, 45, 6, 7, 23, 5, 7, 8];
  for (let j = 0; j < arr.length; j++) {
    let max = 0
    for (let i = 0; i < dummy.length; i++) {
      if (dummy[i] > max) {
        max = dummy[i];
      } else {
        max = max;
      }
    }

    arr1.push(max);
    let a = dummy.indexOf(max);
    if (dummy.length > 1) {
      dummy.splice(a, 1);
    }
    // console.log(arr1);
  }

  console.log(arr1[n - 1]);
}

find_largest(1);






function thirdLargest(arr, arr_size) {
    /* There should be at least three elements */
    if (arr_size < 3) {
      console.log("Invalid Input");
      return;
    }
    let first = arr[0];
    let second = Number.MIN_SAFE_INTEGER;
    let third = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < arr_size; i++) {
      if (arr[i] > first) {
        third = second;
        second = first;
        first = arr[i];
      } else if (arr[i] > second && arr[i] < first) {
        third = second;
        second = arr[i];
      } else if (arr[i] > third && arr[i] < second) {
        third = arr[i];
      }
    }
    console.log("The third largest element is", third);
  }
  let arr = [12, 13, 1, 10, 34, 16];
  let n = arr.length;
  thirdLargest(arr, n);
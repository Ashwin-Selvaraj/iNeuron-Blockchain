function lowerCase(str) {
  let regex = /[a-z]/g;
  if (regex.test(str.charAt(0))) {
    console.log(`The first character of ${str} is in lower case`);
  } else {
    console.log(`The first character of ${str} is not in lower case`);
  }
}
lowerCase("Ashwin");

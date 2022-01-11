function printAns(a) {
  for (const [key, value] of Object.entries(a)) {
    process.stdout.write(`${key}${value}`);
  }
}
function countOccurence(string) {
  let a = {};
  for (let i = 0; i < string.length; i++) {
    a[test[i]] ? a[test[i]]++ : a[test[i]] = 1;
  }
  printAns(a);

}
let string = "aabbaaaccbb";
countOccurence(string);
function printans(a) {
  for (const [key, value] of Object.entries(a)) {
    process.stdout.write(`${key}${value}`);
  }
}
function count(test) {
  let a = {};
  for (let i = 0; i < test.length; i++) {
    a[test[i]] ? a[test[i]]++ : a[test[i]] = 1;
  }
  printans(a);

}
let test = "helloworld";
count(test);
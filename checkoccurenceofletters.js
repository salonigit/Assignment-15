function count(test) {
  let a = {};
  for (let i = 0; i < test.length; i++) {
    a[test[i]] ? a[test[i]]++ : a[test[i]] = 1;
  }
  console.log(a);

}
let test = "helloworld";
count(test);
function printans( ans )
{
  for( let [ key ,value] of ans)
  {
    console.log(`${key}  -  ${value} ` );   
  }
}
function count(test)
{
    let ans = new Map();
    for( let i = 0 ;i < test.length;i++)
    {
      ans.set(test[i], 0);
    }
    for( let i = 0 ;i < test.length ;i++)
    {
        let k = ans.get(test[i]);
        ans.set(test[i], k+1) ;
    }
    printans(ans);
 
}
let test =  "helloworld";
count( test);
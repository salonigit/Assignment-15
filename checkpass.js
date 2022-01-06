function CheckPassword(inputtxt) 
{ 
var pattern=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(inputtxt.match(pattern)) 
{ 
// console.log('Correct Password Pattern')
return true;
}
else
{ 
// console.log('Wrong...!')
return false;
}
} 
const string = "Salonigupta@10";
console.log(CheckPassword(string))
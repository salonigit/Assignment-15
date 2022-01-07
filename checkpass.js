function CheckPassword(inputtxt) {
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#@!?])(?!.*\s).{8,}$/;
    return inputtxt.match(pattern)
}
const string = "Salonigupta@10";
console.log(CheckPassword(string))
function CheckPassword(inputtxt) {
    var pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#?])([a-zA-Z0-9!@#$%^&*]{8,})$/;
    return inputtxt.match(pattern)
}
const string = "Salonigupta@10";
console.log(CheckPassword(string))
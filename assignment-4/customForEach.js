Array.prototype.customForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

output.customForEach(elem => {
    console.log(elem);
});
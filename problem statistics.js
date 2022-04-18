var n = parseInt(readline());
var nums = {
    a: 0,
    b: 0,
    k: 0,
    d: 0
};
 
function getCount(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}
 
for (var i = 0; i < n; i++) {
    var lines = readline().split("");
    nums.a += getCount(lines, "A");
    nums.b += getCount(lines, "B");
    nums.k += getCount(lines, "K");
    nums.d += getCount(lines, "D");
}
 
print(`${nums.a} ${nums.b} ${nums.k} ${nums.d}`);
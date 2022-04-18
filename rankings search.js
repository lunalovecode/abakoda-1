var n = parseInt(readline());
var contestants = {};
for (var i = 0; i < n; i++) {
    var r = readline().split(" ");
    contestants[r[0]] = i;
}
 
var s = parseInt(readline());
 
for (var j = 0; j < s; j++) {
    var namE = readline();
    print(contestants[namE] + 1);
}
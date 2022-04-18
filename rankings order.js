var n = parseInt(readline());
var a0 = [];
var a100 = [];
var a200 = [];
var a300 = [];
var a400 = [];
var contestants = [];
 
for (var i = 0; i < n; i++) {
    var r = readline().split(" ");
    switch (r[1]) {
        case "0":
            a0.push(r[0]);
            break;
        case "100":
            a100.push(r[0]);
            break;
        case "200":
            a200.push(r[0]);
            break;
        case "300":
            a300.push(r[0]);
            break;
        case "400":
            a400.push(r[0]);
            break;
    }
}
 
if (a400.length) {
    a400.sort();
    for (var i = 0; i < a400.length; i++) {
        print(`${a400[i]} 400`);
    }
}
 
if (a300.length) {
    a300.sort();
    for (var i = 0; i < a300.length; i++) {
        print(`${a300[i]} 300`);
    }
}
 
if (a200.length) {
    a200.sort();
    for (var i = 0; i < a200.length; i++) {
        print(`${a200[i]} 200`);
    }
}
 
if (a100.length) {
    a100.sort();
    for (var i = 0; i < a100.length; i++) {
        print(`${a100[i]} 100`);
    }
}
if (a0.length) {
    a0.sort();
    for (var i = 0; i < a0.length; i++) {
        print(`${a0[i]} 0`);
    }
}
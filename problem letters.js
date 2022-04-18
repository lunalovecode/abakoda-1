var x = readline();
var letters = ["A", "B", "K", "D"];
 
//If x = 1, return letters[1 - 1], or letters[0], or "A"
//If x = 2, return letters[2 - 1], or letters[1], or "B"
//If x = 3, return letters[3 - 1], or letters[2], or "C"
//If x = 4, return letters[4 - 1], or letters[3], or "D"
//print(x);
 
print(letters[parseInt(x) - 1])
var q = readline().split(" "); //n is the first element, m is the second element
var numTimesPaired = [];
for (var i = 0; i < parseInt(q[0]); i++) {
    numTimesPaired.push(0);
}
for (var i = 0; i < parseInt(q[1]); i++) {
    var r = readline().split(" ");
    //check r[0]
    //add 1 to numTimesPaired[r[0] - 1]
    //check r[1]
    //add 1 to numTimesPaired[r[1] - 1]
    numTimesPaired[r[0] - 1] = numTimesPaired[r[0] - 1] + 1;
    numTimesPaired[r[1] - 1] = numTimesPaired[r[1] - 1] + 1;

}

//add 1 to numOfTimesPaired[current number - 1]

print(numTimesPaired.join(" "));
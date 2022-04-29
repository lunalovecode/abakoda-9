var q = readline().split(" ");
var values = [];
var numOfTimesPaired = [];
for (var i = 0; i < parseInt(q[1]); i++) {
    var r = readline().split(" ");
    values.push(parseInt(r[0]));
    values.push(parseInt(r[1]));
}

function findNumOccurrences(arr, el) {
    var occurrences = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            occurrences++;
        }
    }
    
    return occurrences;
}

for (var i = 0; i < parseInt(q[0]); i++) {
    numOfTimesPaired.push(findNumOccurrences(values, i + 1));
}

print(numOfTimesPaired.join(" "));

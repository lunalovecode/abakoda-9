var q = readline();
var num = 0;
for (var i = 0; i < 8; i++) {
    var r = readline().split(" ");
    if (r.includes("1")) {
        num++;
    }
}
print(num);
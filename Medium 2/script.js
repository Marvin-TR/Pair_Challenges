let c = "So dark the con of man";
let d = "Madonna of the Rocks";

var a = c.toLowerCase();
var b = d.toLowerCase();

function compare (a, b) {
    var y = a.replace(/\s/g, "");
    var z = b.replace(/\s/g, "");

    var sortY = y.split('').sort().join("");
    var sortZ = z.split('').sort().join("");

    if( sortY === sortZ) {
        console.log(true)
    } else {
        console.log(false)
    }
}

compare(a,b)
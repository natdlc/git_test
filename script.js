/* 

2
alert(1)
null
alert(2)
3


*/

// let age = 91;

// if (age >= 14 && age <= 90) {
//     console.log("eligible");
// }

// else {
//     console.log("not eligible");
// }


/* ~~~ */


// if (!(age >= 14 && age <= 90)) {
//     console.log("not eligible");
// }


/* ~~~ */


/* 

true first
false no alert
true third

*/


/* ~~~ */


let user = prompt("Who's there?");

if (user === "Admin") {

    let password = prompt("Password?");

    if (password === "TheMaster") {
        alert("Welcome!");
    }

    else if (password === null || password ==="") {
        alert("Canceled");
    }

    else {
        alert("Wrong password");
    }

}
else if (user === null || user === "") {
    alert("Canceled");
}

else {
    alert("I don't know you");
}
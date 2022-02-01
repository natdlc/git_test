/* 

o 2
x alert(1)
o null
x alert(2)
o 3


*/

// let age = 91;

// o if (age >= 14  && age <= 90) {
//     console.log("eligible");
// }

// else {
//     console.log("not eligible");
// }


/* ~~~ */


// o if (!(age >= 14 && age <= 90)) {
//     console.log("not eligible");
// } incomplete



/* ~~~ */


/* 

o true first
o false no alert
o true third

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
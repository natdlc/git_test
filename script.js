let radius = +prompt("Enter radius");

radius === 0 ? alert('please enter valid number') :
    !(radius > 0 || radius < 0) ? alert('please enter a number') :
    alert(circumference(radius));

function circumference(rad) {
    return rad * Math.PI * 2;
}
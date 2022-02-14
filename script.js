const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

function findOldest(people) {
    let sortedPeople = people.sort((a,b) => {
        if(a.yearOfDeath === undefined) {
            return (new Date().getFullYear() - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
        }
        else if (b.yearOfDeath === undefined) {
            return (a.yearOfDeath - a.yearOfBirth) - (new Date().getFullYear() - b.yearOfBirth);
        }
        return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth)
    });

    return sortedPeople[sortedPeople.length - 1].name;
}

console.log(findOldest(people));
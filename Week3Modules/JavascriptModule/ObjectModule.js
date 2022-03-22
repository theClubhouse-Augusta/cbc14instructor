const person = {
    fName: "Evan",
    lName: "Gertis",
    title: "instructor",
    duties: function teach(){
        console.log("is teaching")
    },
    favoriteFood: "peanut butter pie",
    mood: function emotion() {
        console.log("having fun");
    },
    motivation: 7.9
}

function objectModule() {
    console.log(person.fName);
    console.log(person.lName);
    console.log(person.title);
    console.log(person.motivation);
    console.log(person.favoriteFood);
    person.duties();
    person.mood();
}

objectModule();
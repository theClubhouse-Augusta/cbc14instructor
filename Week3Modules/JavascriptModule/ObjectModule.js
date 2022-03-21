const person = {
    fName: "Evan",
    lName: "Gertis",
    title: "instructor",
    duties: function teach(){
        console.log("is teaching")
    }
}

function objectModule() {
    console.log(person.fName);
    console.log(person.lName);
    console.log(person.title);
    person.duties();
}

objectModule();
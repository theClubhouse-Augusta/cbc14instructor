
/* 
 author: Evan Gertis
 date: 03/21/2022
 sleep
 coding convention: camelCase required
*/

const thePerson = ["bald","fat","tall","$60k","white"];

// function defintion
function sleep(person) {
    console.time();
    // console.log(`a person with ${person[0]}, ${person[1]}, ${person[2]}, ${person[3]}, and ${person[4]} is sleeping...zzz.zzzz.zzzz`);

    if(person == null)
        console.error(`${person} is null`);

    for (var i = 0; i < person.length; i++){
        console.log(person[i]);
    }

    console.table(person);
    console.timeEnd();
}

sleep(thePerson);
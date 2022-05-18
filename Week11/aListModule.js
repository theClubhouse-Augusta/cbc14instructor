function arrayToList(array) {
    if (!array.length) {
        return {};
    }

    let list = {
        value: array[0]
    };

    if (array.length == 1) {
        list.rest = null;
        return list;
    }

    list.rest = arrayToList(array.slice(1));

    return list;
}

function listToArray(list) {
    if (!Object.keys(list).length) {
        return [];
    }
    
    let array = [list.value];
  
    if (list.rest === null) {
        return array;
    }

    return array.concat(listToArray(list.rest));
}

function prepend(element, list) {
    if (list !== null && !Object.keys(list).length) {
        return {
            value: element,
            rest: null
        }
    }
  
    return {
        value: element,
        rest: list
    };
}

function nth(list, index) {
    if (!Object.keys(list).length) {
        return undefined;
    }

    const get_value = (list, index, current_index) => {     
        if (list.rest === null) {
            if (current_index == index) {
                return list.value;
            }
            else {
                return undefined;
            }
        }
        
        if (current_index == index) {
            return list.value;
        }
        else {
            return get_value(list.rest, index, current_index += 1);
        }
    }
    
    return get_value(list, index, 0);
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 0));
// → 20
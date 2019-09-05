function getDeepProperty(obj, path) {
    path = path.split('.');
    path.forEach(element => {
        obj = obj[element];
    })
    return obj
}
const someObj = { person: { name: { first: 'FirstName', middleInitial: 'I', lastName: 'LastName' } } };

const value = getDeepProperty(someObj, 'person.name.lastName');

document.getElementById('selected-value').innerHTML = value;
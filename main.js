var index = 0;

var employes = [
    {
        index: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 31,
        sex: 'male',
        employed: true
    },
    {
        index: 2,
        firstName: 'Amelia',
        lastName: 'Clark',
        age: 22,
        sex: 'female',
        employed: true
    },
    {
        index: 3,
        firstName: 'Jack',
        lastName: 'Jones  ',
        age: 21,
        sex: 'male',
        employed: false
    },
    {
        index: 4,
        firstName: 'Olivia',
        lastName: 'Wilde',
        age: 31,
        sex: 'female',
        employed: true
    },
];

function returnTable(array) {
    var tableContentDOM = document.querySelector('tbody');
    tableContentDOM.innerHTML = '';
    employes.forEach(function (value, index) {
        var contentDOM ='<tr><th scope="row">' + value.index + '</th><td>' + value.firstName + '</td><td>' + value.lastName + '</td><td>' + value.age + '</td><td>' + value.sex + '</td><td>' + value.employed + '</td></tr>';
        tableContentDOM.insertAdjacentHTML('beforeend', contentDOM);
    })
}

function refreshTable() {
    returnTable(array);
}

returnTable(employes);

function createPerson(firstName, lastName, age, sex, employed) {
    index++;
    return {
        index: index,
        firstName: firstName,
        lastName: lastName,
        age: age,
        sex: sex,
        employed: employed,
    }
}
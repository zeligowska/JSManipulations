var index = 0;

const employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 31,
        sex: 'male',
        employed: true
    },
    {
        firstName: 'Amelia',
        lastName: 'Clark',
        age: 22,
        sex: 'female',
        employed: true
    },
    {
        firstName: 'Jack',
        lastName: 'Jones  ',
        age: 21,
        sex: 'male',
        employed: false
    },
    {
        firstName: 'Olivia',
        lastName: 'Wilde',
        age: 31,
        sex: 'female',
        employed: true
    },
];

const getTableHeader = (array) => {
    const arrayObject = array[0];
    let tableHeader = '<tr>';

    tableHeader += '<th>index</th>'

    Object.keys(arrayObject).forEach((value) => {
        tableHeader += '<th>' + value + '</th>'
    })

    tableHeader += '</tr>'

    return tableHeader;
}

const returnTable = (array) => {
    const tableHeaderDOM = document.querySelector('thead');
    tableHeaderDOM.innerHTML = getTableHeader(array);
    var tableContentDOM = document.querySelector('tbody');
    tableContentDOM.innerHTML = '';
    array.forEach(function (value, index) {
        index++;
        if(value.employed == true) {
            value.employed = '<i class="fa fa-check"></i>';
        };
        if(value.employed == false) {
            value.employed = '<i class="fa fa-times"></i>';
        };
        var contentDOM ='<tr><th scope="row">' + index + '</th><td>' + value.firstName + '</td><td>' + value.lastName + '</td><td>' + value.age + '</td><td>' + value.sex + '</td><td>' + value.employed + '</td></tr>';
        tableContentDOM.insertAdjacentHTML('beforeend', contentDOM);
    })
}

const removeMen = () => {
    var menRemoved = employees.filter((value) => {
        return value.sex == 'female';
    })
    returnTable(menRemoved);
}

const removeWomen = () => {
    var womenRemoved = employees.filter((value) => {
        return value.sex == 'male';
    })
    returnTable(womenRemoved);
}

const refreshTable = () => {
    returnTable(employees);
}

returnTable(employees);

const addEmployee = () => {
    const inputName = document.getElementById('employee-name').value;
    const inputLastName = document.getElementById('employee-last-name').value;
    const inputAge = document.getElementById('employee-age').value;
    const inputSex = document.getElementById('employee-sex').value;
    let isEmployed = document.getElementById('employedCheck').checked;
    const newEmployee = {
        firstName: inputName,
        lastName: inputLastName,
        age: inputAge,
        sex: inputSex,
        employed: isEmployed
    }
    employees.push(newEmployee);
    refreshTable();
}
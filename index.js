const employee = {
    name: 'Alison Beck',
    streetAddress: '10 Woodbury Avenue',
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(employee, key) {
    let editedEmployee = {...employee}
    delete editedEmployee[key]
    return editedEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
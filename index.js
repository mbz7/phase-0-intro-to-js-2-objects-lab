const employee = {}

employee.name = "address";

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
  
  delete employee.key;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];

  return employee;
};

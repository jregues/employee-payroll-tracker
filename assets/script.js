// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

const collectEmployees = function() {
  let askAgain = true;
  let employeesArray = [];
  while (askAgain) {
    let first = window.prompt('Please enter the employees first name');
    let last = window.prompt('Please enter the employees last name');
    let sal = window.prompt("Please enter the employees salary")
  
    let employee = {
      firstName: first,
      lastName: last,
      salary: sal
    }
    employeesArray.push(employee);
    askAgain = window.confirm('Would you like to add another employee to the list?')
    console.log(employeesArray);
  }
  return employeesArray;
  
}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = employeesArray.salary;
  let employeeCount = employeesArray.length;
  let avg = sum / employeeCount;
  console.log(avg)
  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i];
  }
  return avg;
  
}

console.log(displayAverageSalary)
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomEmployee = employeesArray[Math.floor(Math.random()*employeesArray.length)]
  console.log(randomEmployee)
  return randomEmployee;
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

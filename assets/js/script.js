// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const addConsoleInfoBtn = document.querySelector('#show-console-info-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let employeesArray = []; //initialize an empty array for the end user to fill
  let employeeNumbers = prompt("How many employees work at your company?")
  let i = 0; //compare against number of employees above in order to stop loop below once the end user enters in the number of employees
  let employeeTense = 'FIRST'
  while (i < employeeNumbers) {
    if (i == employeeNumbers - 1)
        { 
            employeeTense = 'FINAL' 
        };
    let newEmployee = {
      firstName: window.prompt(`What is the First Name of your ${employeeTense} EMPLOYEE?`),
      lastName: window.prompt('What is the Last Name of this employee?'),
      salary: Number(window.prompt('Finally, what is their SALARY?'))
    }
    employeesArray.push(newEmployee);
    i++;
    employeeTense = 'NEXT'
  }
  return employeesArray; //return the value of the newly end-user made array so that it can be used to calculate functions below NOTE: pass value to function by placing within the ()
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let total = 0;
  for (i = 0; i < employeesArray.length;) {
    total += employeesArray[i].salary;
    i++
  }
  let avg = (total/employeesArray.length).toLocaleString("en-US", {style:"currency", currency:"USD"});
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${avg}`);
  //add redundant average line so that the end-user does not need to open the console to idenfity the average salary
  alert(`Redundant Consolized Data: The average employee salary between our ${employeesArray.length} employee(s) is ${avg}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
    // TODO: Select and display a random employee
    //generate random number to select from employees, use floor for integer.
    let num = (Math.floor(Math.random()));
    //declare value for random employee equal to the randomly generated number applied against the employeesArray
    const randomSelection = employeesArray[num]; //num is randomly generated above and uses that value to be the selection of the employee within the array
    //Display the employee:
    console.log(`Random Employee of the Day: 
    ${randomSelection.firstName} ${randomSelection.lastName}`);
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
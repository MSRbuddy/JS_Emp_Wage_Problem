// UC-5 : CalculateWage for a month till a condition reaches
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

function GetEmployeeHour(employeeTypeCheck)
{
    switch(employeeTypeCheck)
    {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
    default:
        return 0;
    }
}
let totalEmployeeHour = 0;
let totalWorkingDays = 0;
let employeeHour = 0;
while(totalWorkingDays < NUM_OF_WORKING_DAYS && totalEmployeeHour <= MAX_HRS_IN_MONTH)
{
    totalWorkingDays++;
    let employeeTypeCheck = Math.floor((Math.random()*10) % 3);
    employeeHour += GetEmployeeHour(employeeTypeCheck);
}
let employeeWage = employeeHour * WAGE_PER_HOUR;
console.log("Employee Wage :" + employeeWage);
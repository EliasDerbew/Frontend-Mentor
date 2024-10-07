const dayEl = document.querySelector('.input-day');
const monthEl = document.querySelector('.input-month');
const yearsEl = document.querySelector('.input-year');
const calculateEl = document.querySelector('.calculate');
const outputDay = document.querySelector('.day');
const outputMonth = document.querySelector('.month');
const outputYear = document.querySelector('.year');
const errorDay = document.querySelector('.input-day ~ .error');
const errorMonth = document.querySelector('.input-month ~ .error');
const errorYear = document.querySelector('.input-year ~ .error');



// current year, day and month funcion

const today = new Date()
const currDay = today.getDate();
const currMonth = today.getMonth() + 1
const currYear = today.getFullYear()
// handling errors 

calculateEl.addEventListener('click', () => {
    let isError = false;

    // Handling day input errors
    if (dayEl.value === "") {
        errorDay.innerText = 'This field is required';
        dayEl.style.borderColor = 'red';
        isError = true;
    } else if (dayEl.value > 31 || dayEl.value <= 0) {  // Also checking for maximum 31 days
        errorDay.innerText = 'Must be a valid date';
        dayEl.style.borderColor = 'red';
        isError = true;
    } else {
        errorDay.innerText = '';
        dayEl.style.borderColor = '';
    }

    // Handling month input errors
    if (monthEl.value === "") {
        errorMonth.innerText = 'This field is required';
        monthEl.style.borderColor = 'red';
        isError = true;
    } else if (monthEl.value > 12 || monthEl.value <= 0) {  // Corrected month range to 1-12
        errorMonth.innerText = 'Must be a valid month';
        monthEl.style.borderColor = 'red';
        isError = true;
    } else {
        errorMonth.innerText = '';
        monthEl.style.borderColor = '';
    }

    // Handling year input errors
    const currYear = new Date().getFullYear();
    if (yearsEl.value === "") {
        errorYear.innerText = 'This field is required';
        yearsEl.style.borderColor = 'red';
        isError = true;
    } else if (yearsEl.value > currYear) { 
        errorYear.innerText = 'Must be in the past';
        yearsEl.style.borderColor = 'red';
        isError = true;
    } else {
        errorYear.innerText = '';
        yearsEl.style.borderColor = '';
    }

    // If no errors, calculate the age
    if (!isError) {
        const myDay = dayEl.value;
        const myMonth = monthEl.value;
        const myYear = yearsEl.value;
        
        let ageYear = currYear - myYear
        let ageMonth = currMonth - myMonth
        let ageDay = currDay - myDay
          

      //   calculating the year 

        if(currMonth < myMonth) {
         outputYear.innerText = ageYear - 1;
        } else {
         outputYear.innerText = ageYear;
        }

      //   calculating the month
      if(currDay < myDay) {
        outputMonth.innerText = ageMonth - 1;
      } else {
         outputMonth.innerText = ageMonth
      }

      // calculating the day 
      if(ageDay < 0) {
         outputDay.innerText = 30 + ageDay;
      } else {
         outputDay.innerText = ageDay
      }
    }
});

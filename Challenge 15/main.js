document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('.email');
    const submitButton = document.querySelector('button');
    const errorIcon = document.querySelector('.error');
    const errorMessage = document.querySelector('.error-massage');


    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

   
    submitButton.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        const email = emailInput.value.trim(); 

        if (validateEmail(email)) {
      
            errorIcon.style.visibility = 'hidden';
            errorMessage.style.display = 'none';
            alert('Success! You have entered a valid email.');
            emailInput.value = ''; 
        } else {
            
            errorIcon.style.visibility = 'visible';
            errorMessage.style.display = 'block';
        }
    });
});


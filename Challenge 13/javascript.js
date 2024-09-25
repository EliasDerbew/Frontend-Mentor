const ratingNumbers = document.querySelectorAll('.number');
const submitButton = document.querySelector('.btn');

let selectedRating = 0;

ratingNumbers.forEach((number) => {
    number.addEventListener('click', () => {
        ratingNumbers.forEach(num => num.classList.remove('selected'));
        number.classList.add('selected');
        selectedRating = number.textContent;
    });
});

if (submitButton) {
    submitButton.addEventListener('click', () => {
        if (selectedRating > 0) {
            localStorage.setItem('rating', selectedRating);
            window.location.href = 'thank-you.html';
        } else {
            alert('Please select a rating before submitting!');
        }
    });
}
if (document.getElementById('ratedScore')) {
    const ratedScore = localStorage.getItem('rating');
    document.getElementById('ratedScore').textContent = `You selected ${ratedScore} out of 5`;
}

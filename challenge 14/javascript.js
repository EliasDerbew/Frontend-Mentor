const shareElement = document.querySelector('.sharing');
const platformElements = document.querySelectorAll('.platforms');
const triangleElement = document.querySelector('.triangle');

function toggleSharing() {
    // Check if all platform elements are hidden using computed styles
    const allHidden = Array.from(platformElements).every(el => 
        getComputedStyle(el).visibility === 'hidden') && 
        getComputedStyle(triangleElement).visibility === 'hidden';

    if (allHidden) {
        // Set visibility to visible
        platformElements.forEach(el => el.style.visibility = 'visible');
        triangleElement.style.visibility = 'visible';
    } else {
        // Set visibility to hidden
        platformElements.forEach(el => el.style.visibility = 'hidden');
        triangleElement.style.visibility = 'hidden';
    }
}

// Add click event listener to the share button
shareElement.addEventListener('click', toggleSharing);

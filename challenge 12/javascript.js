function showAnswer(numbers, nums) {
    let buttonElement = document.getElementById(`btns${nums}`);
    if (!buttonElement) {
        console.error(`Button with id btns${nums} not found`);
        return;
    }
    
    if (buttonElement.innerText === "+") {
        buttonElement.innerText = "-";
    } else {
        buttonElement.innerText = "+";
    }

    let showMe = document.getElementById(`answer${numbers}`);
    if (!showMe) {
        console.error(`Element with id answer${numbers} not found`);
        return;
    }
    
    // Check for both empty string and 'none'
    if (showMe.style.display === 'none' || showMe.style.display === '') {
        showMe.style.display = 'block';
    } else {
        showMe.style.display = 'none';
    }
}


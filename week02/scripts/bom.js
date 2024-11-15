// Get references to the input, button, and list elements for easier access
const input = document.querySelector('#favch');
const button = document.querySelector('button');
const list = document.querySelector('.chapter-list');

// Set up the event listener for the Add Chapter button
button.addEventListener('click', () => {
    // Trim whitespace and check if the input is not blank
    if (input.value.trim() !== '') {
        // Create a new list item and delete button for the chapter
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create delete button with better accessibility
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        deleteButton.setAttribute('aria-label', `Delete ${input.value}`); // Adding ARIA label for accessibility
        
        // Add the delete button to the list item
        li.append(deleteButton);
        // Add the list item to the chapter list
        list.append(li);

        // Clear out the input field for the next entry
        input.value = '';

        // Set up the delete functionality for the button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus(); // Refocus on the input after deletion for user convenience
        });

        // Refocus on the input so it's ready for the next chapter to be added
        input.focus();
    } else {
        // If the input is blank, just refocus on the input field
        input.focus();
    }
});

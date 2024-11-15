// Get references to the input, button, and list elements for easier access
const input = document.querySelector('#favch');
const button = document.querySelector('button');
const list = document.querySelector('.chapter-list');

// Set up the event listener for the button to add new chapters when clicked
button.addEventListener('click', () => {
    if (input.value !== '') {
        // Create a new list item and a delete button for the chapter
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        
        // Add the delete button to the list item
        li.append(deleteButton);
        // Add the list item to the chapter list
        list.append(li);

        // Clear out the input field so it's ready for the next entry
        input.value = '';

        // Set up the delete functionality for the button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });

        // Refocus on the input so it's ready for the next chapter to be added
        input.focus();
    }
});

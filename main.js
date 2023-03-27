// Selecting input and button elements
const input = document.getElementById('input');
const button = document.getElementById('add-btn');
const list = document.querySelector('.to-do.list');

// Click event listener for button element
button.addEventListener('click', function(e) {
  e.preventDefault(); // prevent the form from submitting

  // Checking if  input value is not empty
  if (input.value !== '') {
    // Creating a new list item 
    const listItem = document.createElement('li');

    // Set text content of  list item to  input value
    listItem.textContent = input.value;

    // Add delete button to list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';

    // Add click event listener to delete button
    deleteButton.addEventListener('click', function() {
      // Remove  list item from the list
      listItem.remove();
    });

    // Appending  delete button to  list item
    listItem.appendChild(deleteButton);

    // Append t list item to  list
    list.appendChild(listItem);

    // Clear  input value
    input.value = '';
  }
});

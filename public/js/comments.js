// Get the comment form element
const commentForm = document.getElementById('comment-form');

// Get the comments container element
const commentsContainer = document.querySelector('.comments-container');

// Add event listener for form submission
commentForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the new comment textarea value
  const newCommentText = document.getElementById('new-comment').value;

  // Create a new <p> element for the new comment
  const newCommentElement = document.createElement('p');
  newCommentElement.textContent = newCommentText;

  // Append the new comment element to the comments container
  commentsContainer.appendChild(newCommentElement);

  // Clear the new comment textarea value
  document.getElementById('new-comment').value = '';
});

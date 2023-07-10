// Get the comment form element
const commentForm = document.getElementById('comment-form');
// Get the comments container element
const commentsContainer = document.querySelector('.comments-container');

// Add event listener for form submission
commentForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the new comment textarea value
  const newCommentText = document.getElementById('new-comment').value;

  // Send the new comment to the server for saving
  const response = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ comment: newCommentText }),
  });

  if (response.ok) {
    // Clear the new comment textarea value
    document.getElementById('new-comment').value = '';

    // Retrieve the updated comments from the server
    const commentsResponse = await fetch('/api/comments');
    if (commentsResponse.ok) {
      const commentsData = await commentsResponse.json();
      renderComments(commentsData.comments);
    }
  }
});

// Function to render comments in the comments container
const renderComments = (comments) => {
  commentsContainer.innerHTML = ''; // Clear existing comments

  comments.forEach((comment) => {
    // Create a new <p> element for each comment
    const commentElement = document.createElement('p');
    commentElement.textContent = comment;
    commentsContainer.appendChild(commentElement);
  });
};

// Retrieve initial comments from the server
fetch('/api/comments')
  .then((response) => response.json())
  .then((data) => {
    renderComments(data.comments);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

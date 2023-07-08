document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('commentForm');
  const submitButton = document.getElementById('submitCommentBtn');

  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the comment text from the textarea
    const commentText = document.getElementById('comment').value;

    // Perform any necessary validation on the comment text

    // Send the comment to the server using AJAX or fetch
    // ...

    // Optionally, display a success message or update the UI
    // ...
  });
});
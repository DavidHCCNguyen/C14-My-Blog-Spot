const fs = require('fs');

// Read the existing comments from comments.json
const commentsData = fs.readFileSync('comments.json');
let comments = JSON.parse(commentsData);

// Function to add a new comment to the comments array
const addComment = (comment) => {
  comments.push({ description: comment });
};

// Example usage
addComment('This is a new comment');

// Write the updated comments array back to comments.json
fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));

console.log('New comment added successfully.');

// Export the addComment function
module.exports = addComment;

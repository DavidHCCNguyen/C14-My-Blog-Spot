const express = require('express');
const router = express.Router();
const fs = require('fs');

// Read the existing comments from comments.json
const commentsData = fs.readFileSync('comments.json');
let comments = JSON.parse(commentsData);

// Route: GET /api/comments
router.get('/comments', (req, res) => {
  res.json({ comments });
});

// Route: POST /api/comments
router.post('/comments', (req, res) => {
  const { comment } = req.body;

  if (comment) {
    // Add the new comment to the comments array
    comments.push(comment);

    // Write the updated comments array back to comments.json
    fs.writeFileSync('comments.json', JSON.stringify(comments));

    res.status(200).json({ message: 'Comment added successfully' });
  } else {
    res.status(400).json({ error: 'Invalid comment' });
  }
});

module.exports = router;

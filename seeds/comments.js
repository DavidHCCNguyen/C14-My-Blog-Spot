const sequelize = require('../config/connection');
const { MainUserComment } = require('../models');

const seedComments = async () => {
  await sequelize.sync({ force: true });

  try {
    await MainUserComment.bulkCreate([
      { comment_text: 'This is a great post!', main_user_id: 1, post_id: 1 },
      { comment_text: 'I completely agree with your points.', main_user_id: 2, post_id: 1 },
      { comment_text: 'Interesting perspective on this topic.', main_user_id: 3, post_id: 2 },
    ]);

    console.log('Comments seeded successfully!');
  } catch (error) {
    console.error('Error occurred during comment seeding:', error);
  }

  process.exit(0);
};

seedComments();

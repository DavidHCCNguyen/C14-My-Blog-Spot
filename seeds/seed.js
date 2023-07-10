const sequelize = require('../config/connection');
const { User, Project, Comment } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
// const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    const createdProject = await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });

  //   // Associate comments with the created project
  //   const projectComments = commentsData.filter(
  //     (comment) => comment.projectId === project.id
  //   );

  //   for (const comment of projectComments) {
  //     await Comment.create({
  //       ...comment,
  //       project_id: createdProject.id,
  //     });
  //   }
  }

  process.exit(0);
};

seedDatabase();

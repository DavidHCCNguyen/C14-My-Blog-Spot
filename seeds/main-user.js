const bcrypt = require('bcrypt');
const sequelize = require('./connection');
const User = require('./models/User');

(async () => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash('Davidiscool', 10);

    // Create the main user
    await User.create({
      name: 'David.nguyen',
      password: hashedPassword
    });

    console.log('Main user has been created.');
    process.exit(0);
  } catch (error) {
    console.error('Error creating main user:', error);
    process.exit(1);
  }
})();

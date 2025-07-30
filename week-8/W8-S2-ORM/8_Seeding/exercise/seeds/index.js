const seedCategories = require('../db/seeders/seed-categories');
const seedPosts = require('../db/seeders/seed-posts'); // created a new file

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synced');

  await seedCategories();
  console.log('Categories seeded');

  await seedPosts();
  console.log('Posts seeded');
  
  process.exit(0);
};

seedAll();

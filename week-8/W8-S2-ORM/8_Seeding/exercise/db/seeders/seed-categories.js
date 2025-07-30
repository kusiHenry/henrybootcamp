// db/seeders/seed-categories.js
const { Category } = require('../models');

const categoryData = [
  { id: 1, category_name: 'Technology' },
  { id: 2, category_name: 'Health' },
  { id: 3, category_name: 'Finance' },
  { id: 4, category_name: 'Travel' },
  { id: 5, category_name: 'Lifestyle' },
];

const seedCategories = async () => {
  await Category.bulkCreate(categoryData, {
    ignoreDuplicates: true
  });
};

module.exports = seedCategories;

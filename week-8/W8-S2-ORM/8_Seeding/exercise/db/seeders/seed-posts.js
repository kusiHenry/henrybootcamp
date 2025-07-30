const { Post } = require('../../models');
const postData = require('../../seeds/posts.json');

const seedPosts = async () => {
  const postsWithCategories = postData.map((post, index) => ({
    ...post,
    categoryId: (index % 5) + 1, 
  }));

  await Post.bulkCreate(postsWithCategories);
};

module.exports = seedPosts;

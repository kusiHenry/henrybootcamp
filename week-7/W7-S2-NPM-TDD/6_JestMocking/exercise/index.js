const { getUserRepos } = require("./github");

// TODO: Enter your GitHub username
const gitHubUser = "kusiHenry";

getUserRepos(gitHubUser).then((repos) => {
  console.log(repos);
});

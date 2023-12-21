const githubAccount = 'johnwargo';

module.exports = async function () {
  var currentPage = 0;
  var done = false;
  var repoURL = '';
  var result = [];

  console.log(`Fetching GitHub repositories for ${githubAccount}`);
  while (!done) {
    currentPage += 1;
    repoURL = `https://api.github.com/users/${githubAccount}/repos?per_page=100&page=${currentPage}`;
    console.log(`Fetching ${repoURL}`);
    var response = await fetch(repoURL);
    if (response.status == 200) {
      var tempRes = await response.json();
      if (tempRes.length === 0) {
        done = true;
      } else {
        console.log(`Found ${tempRes.length} repos`);
        result = result.concat(tempRes);
      }
    } else {
      console.error(`\nError: ${response.status} - ${response.statusText}`);
      process. exit(1);
    }
  }
  return result;
}
const core = require('@actions/core');
const fs = require('fs');
const { Octokit } = require("@octokit/core");

// most @actions toolkit packages have async methods
async function run() {
  const time = Date.now();

  try {
    const description = JSON.parse(fs.readFileSync('package.json', 'utf8')).description
    const github_repository = process.env.GITHUB_REPOSITORY
    const auth = core.getInput('repo-token')

    const octokit = new Octokit({ auth: auth })
    core.info(`Ready to patch ${github_repository}`)

    // https://docs.github.com/en/rest/repos/repos#update-a-repository
    const response = await octokit.request(`PATCH /repos/${ github_repository }`, { description: description })
    core.info(`"status", ${response.status}`);
    core.info(`"headers", ${JSON.stringify(response.headers, null, 2)}`);
    core.info(`"data", ${typeof response.data === "object" ? JSON.stringify(response.data, null, 2) : response.data}`);
  } catch (error) {
    if (error.status) {
      core.info(`< ${error.status} ${Date.now() - time}ms`);
    }
    core.setFailed(error.message);
  }
}

run();

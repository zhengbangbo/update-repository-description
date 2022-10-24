const core = require('@actions/core');
const fs = require('fs');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const packageJsonData = JSON.parse(fs.readFileSync('package.json', 'utf8'))
    core.info(`Read package.json and get description: "${packageJsonData.description}"`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

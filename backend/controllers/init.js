const fs = require("fs").promises;
const path = require("path");


 async function initRepo() {
  const repoPath = path.resolve(process.cwd(), ".git");
  const commitsPath = path.join(repoPath, "commits");

    try {
        await fs.mkdir(repoPath, { recursive: true });
        await fs.mkdir(commitsPath, { recursive: true });
        await fs.writeFile(
            path.join(repoPath, "config.json"), 
            JSON.stringify({buket: process.env.S3_BUCKET })
        );
        console.log("Repository initialized successfully.");
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log("Repository already exists.");
            return;
        }
        
    }   
}

module.exports = { initRepo };

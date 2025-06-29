const fs = require("fs").promises;
const path = require("path");

async function addRepo(filePath) {
    const repoPath = path.resolve(process.cwd(), ".git");
    const stagedPath = path.join(repoPath, "staged");

    try {
        // Ensure the .git directory and staged directory exist
        await fs.mkdir(repoPath, { recursive: true });
        await fs.mkdir(stagedPath, { recursive: true });

        // Copy the file to the staged directory
        const fileName = path.basename(filePath);
        const destinationPath = path.join(stagedPath, fileName);
        await fs.copyFile(filePath, destinationPath);

        console.log(`File ${fileName} added to staging area.`);
    } catch (err) {
        console.error("Error adding file to repository:", err);
    }
    
}
module.exports = { addRepo };
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname);
const targetDir = path.join(__dirname, '..', '..');

const copyFiles = (src, dest) => {
    const entries = fs.readdirSync(src, { withFileTypes: true });

    entries.forEach(entry => {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            if (!fs.existsSync(destPath)) {
                fs.mkdirSync(destPath);
            }
            copyFiles(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    });
};

copyFiles(sourceDir, targetDir);

const packageJsonPath = path.join(targetDir, 'package.json');
const packageJson = require(packageJsonPath);

if (packageJson.scripts && packageJson.scripts.postinstall) {
    delete packageJson.scripts.postinstall;
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

const moveFilesPath = path.join(__dirname, '..', '..', 'moveFiles.js');
if (fs.existsSync(moveFilesPath)) {
    fs.unlinkSync(moveFilesPath);
    console.log('O script moveFiles.js foi excluído.');
}

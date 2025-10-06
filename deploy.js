const fs = require('fs');
const { execSync } = require('child_process');

function log(msg) {
  console.log(`\x1b[36m${msg}\x1b[0m`);
}

// Remove folder recursively
function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

// Move folder safely
function moveDir(src, dest) {
  if (!fs.existsSync(src)) {
    throw new Error(`Source folder ${src} does not exist.`);
  }
  if (fs.existsSync(dest)) {
    removeDir(dest);
  }
  fs.renameSync(src, dest);
}

// Check if git has changes
function gitHasChanges() {
  const status = execSync('git status --porcelain').toString().trim();
  return status.length > 0;
}

try {
  // 1️⃣ Build the Next.js site
  log('Building the site...');
  execSync('npm run build', { stdio: 'inherit' });

  // 2️⃣ Remove old docs folder & move out → docs
  log('Updating docs folder...');
  moveDir('out', 'docs');

  // 3️⃣ Add docs to git
  log('Adding docs folder to git...');
  execSync('git add docs', { stdio: 'inherit' });

  // 4️⃣ Commit & push if there are changes
  if (gitHasChanges()) {
    const commitMessage = `Update site [${new Date().toISOString()}]`;
    log(`Committing changes: "${commitMessage}"`);
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

    log('Pushing to GitHub...');
    execSync('git push origin main', { stdio: 'inherit' });

    log('✅ Deployment complete!');
  } else {
    log('No changes detected. Skipping commit and push.');
  }

} catch (err) {
  console.error('\x1b[31mError during deployment:\x1b[0m', err.message);
  process.exit(1);
}

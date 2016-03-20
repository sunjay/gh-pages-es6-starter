#!/usr/bin/env bash
set -e

# Checks out or creates a gh-pages branch
git checkout gh-pages || git checkout -b gh-pages

# Run the build to get the latest in the dist/ folder
npm run build

# The dist/ files are ignored by default in the .gitignore
# --all ensures that deletions are taken into account
git add --force --all dist/

# Show what's happening
git status

# Need to commit these files since they aren't in the index by default during development
git commit -m "Updating gh-pages with latest code built on $(date)"

# GitHub pages requires files to be in the root directory of the repo,
# so subtree push forces the *contents* of the dist directory to become
# the root only on gh-pages
git subtree push --prefix dist origin gh-pages

# Return to previous branch
git checkout -

echo -e "\e[32mSuccess!"


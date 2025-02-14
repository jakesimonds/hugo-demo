#!/bin/bash

# Check if a file argument was provided
if [ $# -eq 0 ]; then
    echo "Please provide a markdown file as an argument"
    echo "Usage: ./post.sh path/to/your/post.md"
    exit 1
fi

# Get the input file
INPUT_FILE=$1

# Extract filename without path and extension
FILENAME=$(basename "$INPUT_FILE" .md)

# Create new Hugo post
hugo new content/posts/$FILENAME.md

# Append the content of the input file to the newly created Hugo post
# (skipping the first few lines that contain the Hugo front matter)
cat "$INPUT_FILE" >> content/posts/$FILENAME.md

# Build the site
hugo

# Optional: Run hugo server to preview (uncomment if you want this)
# hugo server

# Git operations for main repo
git add .
git commit -m "Add new post: $FILENAME"
git push origin main  # or whatever your branch name is

# Git operations for public directory
cd public
git add .
git commit -m "Deploy new post: $FILENAME"
git push origin main  # or whatever your branch name is

# Return to original directory
cd ..

echo "Post '$FILENAME' has been created and deployed!" 
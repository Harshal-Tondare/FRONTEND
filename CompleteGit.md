https://docs.chaicode.com/youtube/chai-aur-git/introduction/

# git stores the setting in the configuration files : author, email attached with commit

git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"

# to check the setting in confi files

git config --list

# Creating repository

git status
git init

-> .git folder formed (tracking start)

# flow = write -> add(staging area) -> commit(repo) -> push(github)

# Staging area (changes to be commited): 

git init
git add <file1> <file2>
git status

or git add . (add all files)

# to Unstaged :

git rm --cached <file1> <file2>

# Commit: -> repo area

git commit -m "first commit"

* git log -> details about commit (author, email, message, ..)
* git log --oneline


* git default code editor = vim
* change the default code editor

git config --global core.editor "code --wait"

# git ignore

make a file name  -> .gitignore
then can place files like .env etc inside gitignore
and git will noe not trace them

# Git behind the scenes

3 muskeeter 1. Commit object
            2. Tree Object
            3. Blob object

# Commit Object -> Each commit in the project is stored in .git folder in the form of a commit object. A commit object contains the following information:

Tree Object
Parent Commit Object
Author
Committer
Commit Message

# Tree Object ->  is a container for all the files and folders in the project. It contains the following information:

File Mode
File Name
File Hash
Parent Tree Object
Everything is stored as key-value pairs in the tree object. The key is the file name and the value is the file hash.

# Blob Object -> is present in the tree object and contains the actual file content. This is the place where the file content is stored.


# BRANCHES -> This can be useful when you want to make changes to a project without affecting the main branch or when you want to work on a new feature or bug fix.

git branch
git branch bug-fix
git switch bug-fix
git log
git switch main
git switch -c dark-mode  // direct ade new branch and switched to it
git checkout orange-mode

# Some points to note:

git branch - This command lists all the branches in the current repository.
git branch bug-fix - This command creates a new branch called bug-fix.
git switch bug-fix - This command switches to the bug-fix branch.
git log - This command shows the commit history for the current branch.
git switch main - This command switches to the main branch.
git switch -c dark-mode - This command creates a new branch called dark-mode. the -c flag is used to create a new branch.
git checkout orange-mode - This command switches to the orange-mode branch.
Commit before switching to a branch
Go to .git folder and checkout to the HEAD file

# Merging Branches

git checkout main
git merge bug-fix

# Managing conflicts

Manually, accept both, accept outer
make sure after resolveing the conflict you shouls commit changes

# Rename a branch

You can rename a branch using the following command:

Terminal window
git branch -m <old-branch-name> <new-branch-name>

# Delete a branch
You can delete a branch using the following command:

Terminal window
git branch -d <branch-name>

# Checkout a branch
You can checkout a branch using the following command:

Terminal window
git checkout <branch-name>

Checkout a branch means that you are going to work on that branch. You can checkout any branch you want.

# List all branches
You can list all branches using the following command:

Terminal window
git branch

List all branches means that you are going to see all the branches in your repository.

# Git diff , Stash, tags
// can get the hash id using->  git log --oneline

# Git diff

The git diff is an informative command that shows the differences between two commits. It is used to compare the changes made in one commit with the changes made in another commit. Git consider the changed versions of same file as two different files. Then it gives names to these two files and shows the differences between them.

# How to Read the Diff Output

a/ – the original file (before changes)
b/ – the updated file (after changes)
--- – marks the beginning of the original file
+++ – marks the beginning of the updated file
@@ – shows the line numbers and position of changes
Here the file A and file B are the same file but different versions.

# Git will show you the changes made in the file A and file B. It will also show you the line number where the change occurred along with little preview of the change.

# Comparing Working Directory and Staging Area
Terminal window:    git diff

This command shows the unstaged changes in your working directory compared to the staging area. This command alone will not show you the changes made in the file A and file B, you need to provide options to show the changes.

# Comparing Staging Area with Repository
Terminal window:    git diff --staged

This command shows the changes between your last commit and the staging area (i.e., changes that are staged and ready to be committed).

# Comparing Two Branches
Terminal window:    git diff <branch-name-one> <branch-name-two>

This command compares the difference between two branches.

# Another way to compare the difference between two branches is to use the following command:

Terminal window:    git diff branch-name-one..branch-name-two

# Comparing Specific Commits:
Terminal window:    git diff <commit-hash-one> <commit-hash-two>

This command compares the difference between two commits.

# GIT STASH like if apko temparary move akrna hai kahi pe and aoop changes bhi commited nhi karn ahia to

# Git Stash
Stash is a way to save your changes in a temporary location. It’s useful when switching branches without losing work. You can then come back to the file later and apply the changes.

Conflicting changes will not allow you to switch branches without committing the changes. Another alternative is to use the git stash command to save your changes in a temporary location.

Terminal window :   git stash

This command saves your changes in a temporary location. It is like a stack of changes that you can access later.

# Naming the stash
You can also name the stash by using the following command:

Terminal window :   git stash save "work in progress on X feature"

# View the stash list
You can view the list of stashes by using the following command:

Terminal window :   git stash list

# Apply the Most Recent Stash
You can apply the stash by using the following command:

Terminal window :   git stash apply

# Apply Specific Stash
You can apply the specific stash by using the following command:

Terminal window :   git stash apply stash@{0}

Here stash@{0} is the name of the stash. You can use the git stash list command to get the name of the stash.

# Applying and Drop a Stash
You can apply and drop the stash by using the following command:

Terminal window :   git stash pop

This command applies the stash and drops it from the stash list.

# Drop the stash
You can drop the stash by using the following command:

Terminal window :   git stash drop

# Applying stash to a specific branch
You can apply the stash to a specific branch by using the following command:

Terminal window :   git stash apply stash@{0} <branch-name>

# Clearing the stash
You can clear the stash by using the following command:

Terminal window :   git stash clear

# Git Tags -> not that imp cna read from link generally not used

# Git Tags
Tags are a way to mark a specific point in your repository. They are useful when you want to remember a specific version of your code or when you want to refer to a specific commit. Tags are like sticky notes that you can attach to your commits.

# Creating a tag
You can create a tag using the following command:

Terminal window :   git tag <tag-name>

This command creates a new tag with the specified name. The tag will be attached to the current commit.

# Create an annotated tag
You can create an annotated tag using the following command:

Terminal window :   git tag -a <tag-name> -m "Release 1.0"

This command creates an annotated tag with the specified name and message. The tag will be attached to the current commit.

# List all tags
You can list all tags using the following command:

Terminal window :   git tag

This command lists all the tags in your repository.

# Tagging a specific commit
You can tag a specific commit using the following command:

Terminal window :   git tag <tag-name> <commit-hash>

# Push tags to remote repository
You can push tags to a remote repository using the following command:

Terminal window :   git push origin <tag-name>

# Delete a tag
You can delete a tag using the following command:

Terminal window :   git tag -d <tag-name>

# Delete tag on remote repository
You can delete a tag on a remote repository using the following command:

Terminal window :   git push origin :<tag-name>


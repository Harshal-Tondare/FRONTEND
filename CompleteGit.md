# 🧠 Git & GitHub — Complete Masterclass Reference

> **From Zero to Expert in one file.**
> Everything you need to understand Git deeply and use GitHub like a pro.
> Read top to bottom once — reference forever.

---

## 📚 Table of Contents

1. [What is Git? What is GitHub?](#1-what-is-git-what-is-github)
2. [How Git Works — Mental Model](#2-how-git-works--mental-model)
3. [Setup & Configuration](#3-setup--configuration)
4. [Creating & Cloning Repositories](#4-creating--cloning-repositories)
5. [The Core Workflow — Stage, Commit, Push](#5-the-core-workflow--stage-commit-push)
6. [Branching — The Heart of Git](#6-branching--the-heart-of-git)
7. [Merging & Rebasing](#7-merging--rebasing)
8. [Undoing Mistakes](#8-undoing-mistakes)
9. [Stashing — Save Work Temporarily](#9-stashing--save-work-temporarily)
10. [Viewing History & Comparing Changes](#10-viewing-history--comparing-changes)
11. [Remote Repositories](#11-remote-repositories)
12. [Tagging Releases](#12-tagging-releases)
13. [GitHub Features](#13-github-features)
14. [Git Ignore](#14-git-ignore)
15. [Advanced Git](#15-advanced-git)
16. [Git Internals — How It Really Works](#16-git-internals--how-it-really-works)
17. [Aliases & Productivity Tips](#17-aliases--productivity-tips)
18. [Common Workflows](#18-common-workflows)
19. [Troubleshooting & FAQ](#19-troubleshooting--faq)
20. [Quick Reference Cheat Sheet](#20-quick-reference-cheat-sheet)

---

## 1. What is Git? What is GitHub?

### Git
Git is a **distributed version control system (VCS)** created by Linus Torvalds in 2005.
It tracks changes in your files over time so you can:
- Go back to any previous version of your code
- Work on multiple features at the same time (branches)
- Collaborate with others without overwriting each other's work
- Know **who** changed **what** and **when**

**Key idea:** Git stores *snapshots* of your project, not differences.
Every time you commit, Git takes a photo of your entire project at that moment.

### GitHub
GitHub is a **cloud hosting platform** for Git repositories.
- It stores your Git repos online so others can access them
- Adds collaboration features: Pull Requests, Issues, Actions (CI/CD), Projects, etc.
- Think of it as: **Git = the engine, GitHub = the garage**

> Other similar platforms: **GitLab**, **Bitbucket** — same Git underneath, different UI/features.

---

## 2. How Git Works — Mental Model

### The Three Areas (Most Important Concept)

```
┌─────────────────────────────────────────────────────┐
│                  YOUR COMPUTER                       │
│                                                     │
│  ┌──────────────┐   git add   ┌──────────────────┐  │
│  │ WORKING DIR  │ ──────────► │  STAGING AREA    │  │
│  │              │             │  (Index)         │  │
│  │ Files you    │ ◄────────── │                  │  │
│  │ edit         │  git restore│  Files ready     │  │
│  └──────────────┘             │  to be committed │  │
│                               └────────┬─────────┘  │
│                                        │ git commit  │
│                               ┌────────▼─────────┐  │
│                               │  LOCAL REPO      │  │
│                               │  (.git folder)   │  │
│                               │                  │  │
│                               │  Commit history  │  │
│                               └────────┬─────────┘  │
└────────────────────────────────────────┼────────────┘
                                         │ git push
                              ┌──────────▼──────────┐
                              │   REMOTE REPO        │
                              │   (GitHub)           │
                              └──────────────────────┘
```

| Area | What it is |
|---|---|
| **Working Directory** | Your actual project files. Where you write code. |
| **Staging Area (Index)** | A preparation zone. You choose what goes into the next commit. |
| **Local Repo** | The `.git` folder. Stores all your history, branches, commits. |
| **Remote Repo** | GitHub / GitLab. Backup + collaboration hub. |

### The Commit Object
A commit is a **snapshot** that stores:
- A hash (unique ID, e.g. `a3f9b2c`)
- Author name + email
- Timestamp
- Commit message
- Pointer to parent commit(s)
- Pointer to the snapshot of all files

---

## 3. Setup & Configuration

Run these **once** on a new machine before anything else.

```bash
# Set your identity — stored in every commit you make
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Set default editor (choose one)
git config --global core.editor "code --wait"    # VS Code
git config --global core.editor "nano"           # Nano
git config --global core.editor "vim"            # Vim

# Set default branch name to 'main' (modern standard)
git config --global init.defaultBranch main

# Enable colored output in terminal
git config --global color.ui auto

# Set line ending handling
git config --global core.autocrlf input          # macOS/Linux
git config --global core.autocrlf true           # Windows

# View all your configuration
git config --list

# View a specific config value
git config user.name

# Configuration levels:
# --system   → applies to ALL users on the computer   (/etc/gitconfig)
# --global   → applies to YOUR user account           (~/.gitconfig)
# --local    → applies to THIS repo only              (.git/config)
# Local overrides global overrides system
```

### SSH Key Setup (Recommended for GitHub)
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "you@example.com"

# Start SSH agent
eval "$(ssh-agent -s)"

# Add key to agent
ssh-add ~/.ssh/id_ed25519

# Copy public key to clipboard (then paste into GitHub → Settings → SSH Keys)
cat ~/.ssh/id_ed25519.pub

# Test connection
ssh -T git@github.com
# Should say: "Hi username! You've successfully authenticated..."
```

---

## 4. Creating & Cloning Repositories

### Create a New Repo from Scratch
```bash
mkdir my-project       # Create a folder
cd my-project          # Enter it
git init               # Initialize Git — creates .git folder
                       # Your repo is now ready!
```

### Clone an Existing Repo from GitHub
```bash
# Clone via HTTPS (needs username/password or token)
git clone https://github.com/username/repo-name.git

# Clone via SSH (recommended — uses SSH key, no password prompts)
git clone git@github.com:username/repo-name.git

# Clone into a specific folder name
git clone https://github.com/username/repo.git my-folder

# Clone only a specific branch
git clone -b branch-name https://github.com/username/repo.git

# Shallow clone — only latest snapshot (faster, less history)
git clone --depth 1 https://github.com/username/repo.git
```

After cloning, Git automatically:
- Creates a local copy of the repo
- Sets up a remote called `origin` pointing to GitHub
- Checks out the default branch

---

## 5. The Core Workflow — Stage, Commit, Push

This is what you do **every day** as a developer.

### Step 1 — Check Status
```bash
git status
# Shows:
# - Which branch you're on
# - Which files are modified (not staged)
# - Which files are staged (ready to commit)
# - Which files are untracked (new files Git doesn't know about yet)
```

### Step 2 — Stage Changes
```bash
# Stage a specific file
git add filename.txt

# Stage multiple files
git add file1.txt file2.js

# Stage all changes in current directory (and below)
git add .

# Stage all changes across entire repo
git add -A

# Interactively choose which parts of a file to stage (hunks)
git add -p filename.txt      # very useful — lets you stage only some changes in a file
```

### Step 3 — Commit
```bash
# Commit with a message inline
git commit -m "Add login feature"

# Open editor for a multi-line commit message (good for detailed messages)
git commit

# Stage ALL tracked files and commit in one step (skips staging area)
# Does NOT add untracked (new) files
git commit -am "Fix typo in readme"
```

### Step 4 — Push to GitHub
```bash
# Push current branch to remote
git push

# Push and set the upstream (tracking) branch — do this the FIRST time you push a new branch
git push -u origin branch-name

# After -u is set, you can just use:
git push
```

### Commit Message Best Practices

```
✅ Good commit messages:
feat: add user login page
fix: correct null check in auth middleware
docs: update README with setup instructions
refactor: extract validation logic into helper
test: add unit tests for cart calculation

❌ Bad commit messages:
"fix"
"asdf"
"wip"
"changes"
"updated stuff"
```

**Conventional Commits** format: `type(scope): description`
Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

---

## 6. Branching — The Heart of Git

Branches let you work on features or fixes **in isolation** without touching the main code.
Each branch is just a lightweight pointer to a commit.

```
main:     A ── B ── C ── D
                     \
feature:              E ── F ── G
```

### Create & Switch Branches
```bash
# List all branches (current branch marked with *)
git branch

# List all branches including remote ones
git branch -a

# Create a new branch
git branch feature/login

# Switch to a branch
git checkout feature/login

# ✅ Modern way — create AND switch in one command
git switch -c feature/login

# Switch to existing branch
git switch main

# Create branch from a specific commit or branch
git branch hotfix/bug main         # branch from main
git branch feature/v2 abc1234      # branch from a specific commit
```

### Rename & Delete Branches
```bash
# Rename current branch
git branch -m new-name

# Delete a branch (safe — won't delete unmerged branches)
git branch -d feature/login

# Force delete (even if unmerged — be careful!)
git branch -D feature/login

# Delete a remote branch
git push origin --delete feature/login
```

### Understanding HEAD
`HEAD` is a special pointer that indicates **where you are right now** — which commit is your current position.

```bash
# Normally HEAD points to a branch (which points to latest commit)
HEAD → main → commit D

# In "detached HEAD" state, HEAD points directly to a commit (no branch)
git checkout abc1234     # Detached HEAD — you're at a specific commit
                         # Any commits here are "orphaned" unless you create a branch
git switch -c new-branch # Save your work by creating a branch here
```

---

## 7. Merging & Rebasing

Two ways to integrate changes from one branch into another.

### Merging
Merging **combines** two branches and creates a new "merge commit".

```bash
# First switch to the branch you want to merge INTO
git switch main

# Merge feature branch into main
git merge feature/login

# Types of merges:
# 1. Fast-forward — if no new commits on main since branching, just moves pointer forward
# 2. 3-way merge — creates a new merge commit (when both branches have new commits)

# Merge with no fast-forward (always create a merge commit, keeps history clean)
git merge --no-ff feature/login

# Squash merge — combine all feature commits into ONE commit on main
git merge --squash feature/login
git commit -m "Add login feature"
```

```
BEFORE:          AFTER merge:
main: A─B        main: A─B─────E (merge commit)
           \              \   /
feat:  C─D          C─D──'
```

### Rebasing
Rebasing **replays** your commits on top of another branch — rewrites history for a cleaner line.

```bash
# Switch to your feature branch
git switch feature/login

# Rebase onto main — replays your commits on top of latest main
git rebase main

# Interactive rebase — powerful! Edit, squash, reorder, drop commits
git rebase -i HEAD~3      # Interactively edit last 3 commits

# Interactive rebase commands (shown in editor):
# pick   = use commit as-is
# reword = use commit but change the message
# edit   = use commit but stop to amend
# squash = combine with previous commit
# fixup  = combine with previous, discard this message
# drop   = remove this commit entirely
```

```
BEFORE rebase:   AFTER rebase:
main: A─B        main: A─B
         \                \
feat: C─D          feat:  C'─D'  (new commits, replayed on B)
```

### ⚠️ Golden Rule of Rebasing
> **Never rebase branches that others are working on.**
> Rebasing rewrites commit hashes. If someone else has your old commits, their history diverges and it causes chaos.
> Safe rule: **Only rebase your local/private feature branches.**

### Resolving Merge Conflicts
Conflicts happen when two branches edit the same line differently.

```bash
# Git will tell you there's a conflict
git merge feature/login
# CONFLICT (content): Merge conflict in app.js

# Open the file — you'll see conflict markers:
<<<<<<< HEAD              ← your current branch (main)
const port = 3000;
=======                   ← divider
const port = 8080;
>>>>>>> feature/login     ← the branch being merged in

# Fix the file manually — delete markers, keep what you want:
const port = 3000;        # (or 8080, or something else)

# Mark as resolved by staging it
git add app.js

# Complete the merge
git commit

# Or abort the merge if you want to start over
git merge --abort
```

---

## 8. Undoing Mistakes

This is where most people panic. Know these well.

```
DANGER LEVEL:  🟢 Safe   🟡 Careful   🔴 Destructive
```

### Undo Uncommitted Changes (Working Directory)
```bash
# 🟢 Discard changes to a specific file (restore from last commit)
git restore filename.txt

# 🟢 Discard ALL uncommitted changes in working directory
git restore .

# 🟢 Remove untracked files (preview first with -n)
git clean -n              # dry run — shows what WOULD be deleted
git clean -f              # actually delete untracked files
git clean -fd             # also delete untracked directories
```

### Undo Staged Changes (Remove from Staging)
```bash
# 🟢 Unstage a file (keep the changes, just remove from staging area)
git restore --staged filename.txt

# 🟢 Unstage everything
git restore --staged .
```

### Undo Commits
```bash
# 🟢 Amend the last commit (change message or add forgotten files)
git add forgotten-file.txt          # stage anything extra first
git commit --amend -m "New message" # replaces last commit
# ⚠️ Don't amend if you've already pushed (rewrites history)

# 🟢 Revert — creates a NEW commit that undoes a previous commit
# Safe for public/shared branches
git revert abc1234          # undo specific commit
git revert HEAD             # undo most recent commit
git revert HEAD~2..HEAD     # undo last 2 commits

# 🟡 Reset — moves branch pointer backward (rewrites history)
git reset --soft HEAD~1     # undo last commit, KEEP changes STAGED
git reset --mixed HEAD~1    # undo last commit, KEEP changes UNSTAGED (default)
git reset --hard HEAD~1     # 🔴 undo last commit, DISCARD all changes — PERMANENT

# 🔴 Reset to match remote (discards all local commits on this branch)
git reset --hard origin/main
```

### The Reflog — Your Safety Net
```bash
# Git secretly keeps a log of every place HEAD has been — including after resets!
git reflog

# Example output:
# a3f9b2c HEAD@{0}: reset: moving to HEAD~1
# b7c4d1e HEAD@{1}: commit: Add login page
# ...

# Recover a "lost" commit by resetting back to it
git reset --hard HEAD@{1}   # go back to where HEAD was before the reset

# Reflog keeps entries for 90 days by default — your safety net!
```

---

## 9. Stashing — Save Work Temporarily

Stash lets you save unfinished work temporarily and switch tasks without committing.

```bash
# Stash your current changes (tracked files only)
git stash

# Stash with a descriptive message
git stash push -m "half-done login form"

# Stash including untracked (new) files
git stash push -u

# Stash including ignored files too
git stash push -a

# View all stashes
git stash list
# stash@{0}: On main: half-done login form
# stash@{1}: WIP on feature: abc1234 some commit

# Apply most recent stash (keeps it in stash list)
git stash apply

# Apply and remove from stash list
git stash pop

# Apply a specific stash
git stash apply stash@{2}

# Delete a specific stash
git stash drop stash@{1}

# Delete ALL stashes
git stash clear

# View what's in a stash without applying
git stash show stash@{0}
git stash show -p stash@{0}    # with full diff

# Create a branch from a stash
git stash branch feature/new-branch stash@{0}
```

---

## 10. Viewing History & Comparing Changes

### Git Log
```bash
# Basic log — full details
git log

# Compact one-line per commit
git log --oneline

# Beautiful visual graph of branches and merges
git log --oneline --graph --all --decorate

# Filter by author
git log --author="John"

# Filter by date
git log --since="2024-01-01"
git log --after="2 weeks ago"
git log --before="2024-06-01"

# Search commit messages
git log --grep="login"

# Show commits that changed a specific file
git log -- filename.txt

# Show the actual changes in each commit
git log -p

# Show stats (files changed, insertions, deletions)
git log --stat

# Show last N commits
git log -5

# Show commits between two refs
git log main..feature/login       # commits in feature not in main
git log feature/login..main       # commits in main not in feature
```

### Git Diff
```bash
# Diff between working directory and staging area (unstaged changes)
git diff

# Diff between staging area and last commit (staged changes)
git diff --staged
git diff --cached        # same thing

# Diff between two branches
git diff main feature/login

# Diff of a specific file
git diff filename.txt

# Diff between two commits
git diff abc1234 def5678

# Show just the filenames that changed (not full diff)
git diff --name-only main feature/login

# Show summary stats of changes
git diff --stat main feature/login
```

### Git Show
```bash
# Show what a commit changed
git show abc1234

# Show a specific file at a specific commit
git show abc1234:path/to/file.txt

# Show the last commit
git show HEAD

# Show the commit 3 before last
git show HEAD~3
```

### Git Blame
```bash
# See who wrote each line of a file (and in which commit)
git blame filename.txt

# Blame with more context
git blame -L 10,25 filename.txt    # only lines 10 to 25
git blame -w filename.txt          # ignore whitespace changes
```

---

## 11. Remote Repositories

### Managing Remotes
```bash
# View all remotes (name + URL)
git remote -v

# Add a remote
git remote add origin https://github.com/user/repo.git

# Add a second remote (useful for forking)
git remote add upstream https://github.com/original/repo.git

# Change a remote URL
git remote set-url origin https://github.com/user/new-repo.git

# Remove a remote
git remote remove upstream

# Rename a remote
git remote rename origin github
```

### Fetching & Pulling
```bash
# Fetch — downloads changes from remote but does NOT merge
# Safe — doesn't touch your working directory
git fetch origin

# Fetch all remotes
git fetch --all

# Pull — fetch + merge in one command
git pull

# Pull from specific remote and branch
git pull origin main

# Pull with rebase instead of merge (cleaner history)
git pull --rebase origin main
```

### Pushing
```bash
# Push to remote
git push origin main

# Push and set tracking (first push of a new branch)
git push -u origin feature/login

# Force push (⚠️ overwrites remote history — use carefully, only on private branches)
git push --force origin feature/login

# Safer force push — fails if someone else pushed since you last fetched
git push --force-with-lease origin feature/login

# Push all branches
git push --all origin

# Push tags
git push --tags
```

### Tracking Branches
```bash
# See which local branches track which remote branches
git branch -vv

# Set up tracking for existing branch
git branch --set-upstream-to=origin/main main

# After tracking is set, pull/push without specifying remote:
git pull
git push
```

---

## 12. Tagging Releases

Tags mark specific commits as important — usually version releases.

```bash
# Lightweight tag (just a pointer to a commit — no extra info)
git tag v1.0.0

# Annotated tag (recommended — stores author, date, message)
git tag -a v1.0.0 -m "Version 1.0.0 — stable release"

# Tag a specific commit (not just latest)
git tag -a v0.9.0 abc1234 -m "Beta release"

# List all tags
git tag

# Show tag details
git show v1.0.0

# Push a specific tag to remote
git push origin v1.0.0

# Push ALL tags to remote
git push origin --tags

# Delete a local tag
git tag -d v1.0.0

# Delete a remote tag
git push origin --delete v1.0.0

# Checkout code at a specific tag (detached HEAD state)
git checkout v1.0.0
```

---

## 13. GitHub Features

### Forking
- A **fork** is a personal copy of someone else's repo on your GitHub account
- Used to contribute to open source projects
- Workflow:
  1. Fork the repo on GitHub (click Fork button)
  2. `git clone` your fork
  3. Add upstream remote: `git remote add upstream https://github.com/original/repo.git`
  4. Make changes on a branch
  5. Open a Pull Request from your fork to the original repo

### Pull Requests (PR)
A PR is a request to merge your branch into another branch.
It's also the place for **code review**, **discussion**, and **automated checks**.

**PR Workflow:**
```
1. Create a branch locally
2. Make commits
3. Push branch to GitHub
4. On GitHub → "Compare & pull request"
5. Fill in title + description
6. Request reviewers
7. Address feedback with new commits
8. Once approved → Merge PR
9. Delete the merged branch
```

**PR Title Best Practices:**
```
feat: add dark mode toggle
fix: resolve login crash on iOS
chore: update dependencies
```

### Issues
- Used to track bugs, features, tasks, discussions
- Can be assigned, labeled, and linked to PRs
- Reference in commits: `git commit -m "fix: resolve crash (closes #42)"`
  This auto-closes Issue #42 when the commit reaches main

### GitHub Actions (CI/CD)
Automate workflows — run tests, build, deploy on every push or PR.

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm test
```

### GitHub Releases
- Built on top of tags
- Add release notes, changelog, binary downloads
- Create on GitHub UI or via CLI:
```bash
gh release create v1.0.0 --title "v1.0.0" --notes "Initial release"
```

### GitHub CLI (`gh`)
```bash
# Install: https://cli.github.com

gh repo create my-repo --public         # Create a repo
gh repo clone username/repo             # Clone a repo
gh pr create --title "My PR" --body ""  # Create a PR
gh pr list                              # List open PRs
gh pr checkout 42                       # Check out PR #42 locally
gh pr merge 42 --squash                 # Merge a PR
gh issue create --title "Bug found"     # Create an issue
gh issue list                           # List open issues
gh issue close 42                       # Close an issue
gh workflow run ci.yml                  # Manually trigger a workflow
```

---

## 14. Git Ignore

`.gitignore` tells Git which files/folders to completely ignore.

```bash
# Create a .gitignore file in repo root
touch .gitignore
```

### Common .gitignore Patterns
```gitignore
# ─── Node.js ─────────────────────
node_modules/
npm-debug.log
.npm

# ─── Python ──────────────────────
__pycache__/
*.py[cod]
*.egg-info/
dist/
venv/
.env

# ─── Build Output ────────────────
/build
/dist
/out

# ─── Environment Files ───────────
.env
.env.local
.env.*.local
*.env

# ─── IDE / Editor ────────────────
.idea/
.vscode/
*.swp
*.swo
.DS_Store           # macOS
Thumbs.db           # Windows

# ─── Logs ────────────────────────
logs/
*.log

# ─── Test Coverage ───────────────
coverage/
.nyc_output/

# ─── Secrets ─────────────────────
*.pem
*.key
secrets.json
```

### Pattern Rules
```gitignore
folder/          # ignore a specific folder
*.txt            # ignore all .txt files
!important.txt   # EXCEPT this one (negation)
/root-file.txt   # only in repo root (not subdirs)
**/logs          # in any subdirectory
doc/**/*.pdf     # all PDFs under doc/
```

```bash
# Check if a file is being ignored
git check-ignore -v filename.txt

# Force add an ignored file (override .gitignore)
git add -f filename.txt

# Remove a file from tracking without deleting it (useful after adding to .gitignore)
git rm --cached filename.txt
git rm --cached -r folder/        # for a directory
```

### Global .gitignore (applies to all repos on your machine)
```bash
git config --global core.excludesfile ~/.gitignore_global

# Then edit ~/.gitignore_global with OS-specific patterns:
# .DS_Store, Thumbs.db, .idea/, etc.
```

---

## 15. Advanced Git

### Cherry Pick — Apply a Specific Commit
```bash
# Apply a specific commit from another branch onto current branch
git cherry-pick abc1234

# Cherry pick multiple commits
git cherry-pick abc1234 def5678

# Cherry pick a range of commits
git cherry-pick abc1234..def5678

# Cherry pick without committing (stage changes only)
git cherry-pick --no-commit abc1234
```

### Bisect — Find the Commit That Introduced a Bug
```bash
# Start bisect
git bisect start

# Tell Git: current state is bad (has the bug)
git bisect bad

# Tell Git: this old commit was good (no bug)
git bisect good v1.0.0

# Git checks out a middle commit — test your code!
# Then tell Git if it's good or bad:
git bisect good     # or
git bisect bad

# Repeat until Git finds the exact commit that introduced the bug
# Git will say: "abc1234 is the first bad commit"

# End bisect (returns to original HEAD)
git bisect reset
```

### Submodules — Repos Inside Repos
```bash
# Add another repo as a submodule
git submodule add https://github.com/user/library.git libs/library

# Clone a repo that has submodules (--recurse-submodules fetches them too)
git clone --recurse-submodules https://github.com/user/repo.git

# If you already cloned without submodules, fetch them:
git submodule update --init --recursive

# Update all submodules to latest
git submodule update --remote
```

### Worktrees — Multiple Working Directories
```bash
# Check out a branch in a separate folder (without switching)
# Useful for testing while keeping your current work intact
git worktree add ../hotfix hotfix/critical-bug

# List all worktrees
git worktree list

# Remove a worktree
git worktree remove ../hotfix
```

### Git Hooks — Automate Actions
Hooks are scripts that run automatically at certain Git events.
Located in `.git/hooks/` (local only — not committed to repo).

```bash
# Common hooks:
# pre-commit      → runs before each commit (lint, tests)
# commit-msg      → validate commit message format
# pre-push        → runs before push (run full test suite)
# post-merge      → runs after merge (npm install if package.json changed)

# Example: .git/hooks/pre-commit
#!/bin/bash
npm run lint
if [ $? -ne 0 ]; then
  echo "❌ Linting failed. Commit aborted."
  exit 1
fi

# Make the hook executable
chmod +x .git/hooks/pre-commit
```

> Use tools like **Husky** to commit hooks to your repo and share with team:
> `npm install husky --save-dev`

### Sparse Checkout — Checkout Only Part of a Repo
```bash
# Useful for huge monorepos — only check out the folders you need
git clone --no-checkout https://github.com/user/huge-monorepo.git
cd huge-monorepo
git sparse-checkout init --cone
git sparse-checkout set packages/my-package
git checkout main
```

### Git Archive — Export Project Without .git
```bash
# Export project as a zip (no git history)
git archive --format=zip HEAD > project.zip

# Export a specific tag
git archive --format=tar.gz v1.0.0 > release-v1.0.0.tar.gz
```

---

## 16. Git Internals — How It Really Works

Understanding this makes you dangerous (in a good way).

### The .git Folder
```
.git/
├── HEAD              ← Pointer to current branch (or commit in detached state)
├── config            ← Local repo config
├── index             ← Staging area (binary file)
├── objects/          ← ALL data: commits, trees, blobs
│   ├── ab/
│   │   └── c1234...  ← Object file named by SHA-1 hash
│   └── pack/         ← Packed objects (compressed)
├── refs/
│   ├── heads/        ← Local branches (each file contains a commit hash)
│   │   └── main
│   └── remotes/      ← Remote tracking branches
│       └── origin/
│           └── main
└── logs/
    └── HEAD          ← The reflog!
```

### The Four Object Types
```bash
# 1. BLOB — stores file content (not the filename, just content)
# 2. TREE — a directory: maps filenames to blobs and other trees
# 3. COMMIT — snapshot: points to a tree + parent commit(s) + metadata
# 4. TAG — annotated tag: points to a commit with extra info

# View any object
git cat-file -t abc1234          # type of object
git cat-file -p abc1234          # print object content

# See the tree of a commit
git ls-tree HEAD
git ls-tree -r HEAD --name-only  # all files recursively
```

### Why Hashes?
Every object is identified by a **SHA-1 hash** of its content.
- Same content = same hash = never stored twice (deduplication!)
- Any change = different hash = Git detects it
- Impossible to change history without changing all subsequent hashes

---

## 17. Aliases & Productivity Tips

### Set Up Aliases
```bash
# Add to ~/.gitconfig or run git config --global alias.XX "..."
git config --global alias.st "status"
git config --global alias.co "checkout"
git config --global alias.br "branch"
git config --global alias.lg "log --oneline --graph --all --decorate"
git config --global alias.undo "reset --soft HEAD~1"
git config --global alias.unstage "restore --staged"
git config --global alias.last "log -1 HEAD"
git config --global alias.aliases "config --get-regexp '^alias\.'"

# Now use them:
git st          # instead of git status
git lg          # beautiful graph log
git undo        # undo last commit, keep changes
```

### Or edit ~/.gitconfig directly:
```ini
[alias]
    st      = status
    co      = checkout
    br      = branch -vv
    lg      = log --oneline --graph --all --decorate --color
    undo    = reset --soft HEAD~1
    unstage = restore --staged
    last    = log -1 HEAD --stat
    wip     = commit -am "WIP"
    aliases = config --get-regexp '^alias\\.'
    find    = log --all --oneline --grep
    today   = log --since=midnight --oneline --author="Your Name"
```

---

## 18. Common Workflows

### Feature Branch Workflow (Most Common)
```bash
# 1. Start from up-to-date main
git switch main
git pull

# 2. Create a feature branch
git switch -c feature/user-auth

# 3. Work, commit regularly
git add .
git commit -m "feat: add JWT auth middleware"
git commit -m "feat: add login endpoint"

# 4. Keep up to date with main while working
git fetch origin
git rebase origin/main      # replay your commits on top of latest main

# 5. Push and open PR
git push -u origin feature/user-auth
# → Open PR on GitHub

# 6. After PR is merged, clean up
git switch main
git pull
git branch -d feature/user-auth
```

### Gitflow Workflow (For versioned software)
```
main       → production-ready code only. Tagged with version numbers.
develop    → integration branch. All features merge here first.
feature/*  → individual feature branches, branch off develop
release/*  → release prep branch, branch off develop
hotfix/*   → emergency fixes, branch off main, merge back to main + develop
```

### Trunk Based Development (For CI/CD teams)
```
main       → everyone commits here (or merges very short-lived branches)
Short-lived feature branches (< 1 day)
Feature flags to hide incomplete work
Requires good CI/CD with automated testing
```

### Open Source Contribution Workflow
```bash
# 1. Fork the repo on GitHub (click Fork)

# 2. Clone YOUR fork
git clone git@github.com:YOUR_USERNAME/repo.git
cd repo

# 3. Add the original repo as upstream
git remote add upstream https://github.com/ORIGINAL/repo.git

# 4. Create a feature branch
git switch -c fix/login-bug

# 5. Make changes and commit
git commit -am "fix: resolve login redirect issue"

# 6. Keep your fork in sync with upstream
git fetch upstream
git rebase upstream/main

# 7. Push to your fork
git push origin fix/login-bug

# 8. Open a PR from your fork to the original repo
# → GitHub will prompt you after pushing
```

---

## 19. Troubleshooting & FAQ

### "My push was rejected"
```bash
# Means the remote has commits you don't have
git pull --rebase    # rebase your changes on top of remote's
git push             # now push should work

# If you deliberately need to overwrite (your own private branch only!)
git push --force-with-lease
```

### "I committed to the wrong branch"
```bash
# Copy the commit to the right branch
git log --oneline -1            # note the commit hash (e.g. abc1234)
git switch correct-branch
git cherry-pick abc1234         # apply it here

# Remove it from the wrong branch
git switch wrong-branch
git reset --hard HEAD~1         # delete last commit
```

### "I accidentally deleted a branch"
```bash
git reflog                      # find the last commit hash of that branch
git switch -c recovered-branch abc1234   # recreate it
```

### "I need to change the last commit message"
```bash
git commit --amend -m "New correct message"
# Only if NOT pushed yet. If pushed, use with caution:
git push --force-with-lease
```

### "I want to undo a push to remote"
```bash
# Create a new revert commit (safest — keeps history)
git revert HEAD
git push

# Or force reset (⚠️ only if no one else has pulled)
git reset --hard HEAD~1
git push --force-with-lease
```

### "Git says there are conflicts but files look fine"
```bash
# Likely left over conflict markers — search for them:
grep -r "<<<<<<" .

# Or start the merge over
git merge --abort
git fetch origin
git merge origin/main
```

### "How do I see what changed between versions?"
```bash
git diff v1.0.0 v1.1.0                     # all changes
git diff v1.0.0 v1.1.0 -- specific/file.js # one file
git log v1.0.0..v1.1.0 --oneline           # commit list
```

### "I want to split one big commit into multiple"
```bash
git reset HEAD~1              # undo last commit, keep all changes unstaged
git add -p                    # interactively stage only part of changes
git commit -m "First part"
git add .
git commit -m "Second part"
```

---

## 20. Quick Reference Cheat Sheet

```bash
# ─── SETUP ───────────────────────────────────────────────────────
git config --global user.name "Name"         # set name
git config --global user.email "e@mail.com"  # set email
git config --list                            # view config

# ─── REPO ────────────────────────────────────────────────────────
git init                       # new repo
git clone <url>                # clone remote repo
git clone <url> folder         # clone into specific folder

# ─── CORE CYCLE ──────────────────────────────────────────────────
git status                     # check what's changed
git add .                      # stage all changes
git add -p                     # stage interactively (by hunk)
git commit -m "msg"            # commit
git commit -am "msg"           # stage+commit tracked files
git push                       # push to remote
git pull                       # pull from remote

# ─── BRANCHES ────────────────────────────────────────────────────
git branch                     # list branches
git switch -c feature/x        # create + switch
git switch main                # switch branch
git branch -d feature/x        # delete branch
git merge feature/x            # merge into current
git rebase main                # rebase onto main

# ─── UNDO ────────────────────────────────────────────────────────
git restore file.txt           # discard working dir changes
git restore --staged file.txt  # unstage
git commit --amend             # change last commit
git revert HEAD                # undo last commit (safe)
git reset --soft HEAD~1        # undo commit, keep staged
git reset --hard HEAD~1        # undo commit, discard changes ⚠️
git reflog                     # recover anything

# ─── STASH ───────────────────────────────────────────────────────
git stash                      # save work temporarily
git stash push -m "msg"        # stash with message
git stash pop                  # apply + remove stash
git stash list                 # list stashes

# ─── HISTORY ─────────────────────────────────────────────────────
git log --oneline --graph --all   # visual branch history
git diff                          # unstaged changes
git diff --staged                 # staged changes
git blame file.txt                # who wrote each line
git show abc1234                  # inspect a commit

# ─── REMOTE ──────────────────────────────────────────────────────
git remote -v                  # list remotes
git remote add origin <url>    # add remote
git fetch origin               # download (no merge)
git push -u origin branch      # push + set tracking
git push --force-with-lease    # safe force push ⚠️

# ─── TAGS ────────────────────────────────────────────────────────
git tag -a v1.0.0 -m "msg"    # create annotated tag
git push origin v1.0.0         # push tag
git push --tags                # push all tags

# ─── ADVANCED ────────────────────────────────────────────────────
git cherry-pick abc1234        # apply specific commit
git bisect start/good/bad      # find bug-introducing commit
git rebase -i HEAD~3           # interactive rebase
git clean -fd                  # delete untracked files/dirs ⚠️
```

---

## 📖 Symbols & Notation Reference

| Symbol | Meaning |
|---|---|
| `HEAD` | Current position (latest commit on current branch) |
| `HEAD~1` | One commit before HEAD |
| `HEAD~3` | Three commits before HEAD |
| `HEAD^` | Parent of HEAD (same as HEAD~1) |
| `HEAD^^` | Grandparent of HEAD (same as HEAD~2) |
| `@{u}` | Upstream tracking branch |
| `origin` | Default name for the remote you cloned from |
| `upstream` | Common name for the original repo (in forks) |
| `..` | Range: commits reachable from right but not left |
| `...` | Symmetric difference: commits reachable from either, not both |

---

## 🔗 Resources to Go Deeper

| Resource | URL |
|---|---|
| Official Git Docs | https://git-scm.com/doc |
| Pro Git Book (free) | https://git-scm.com/book |
| GitHub Docs | https://docs.github.com |
| Learn Git Branching (interactive) | https://learngitbranching.js.org |
| GitHub Skills | https://skills.github.com |
| Conventional Commits | https://www.conventionalcommits.org |
| Oh My Git! (game) | https://ohmygit.org |

---

> ✅ **You now know Git from the inside out.**
> The best way to learn is to use it daily. Make mistakes. Read the error messages.
> Every `git reflog` can save you. Nothing is truly lost in Git.

*Last updated: 2025*

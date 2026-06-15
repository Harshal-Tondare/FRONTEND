# 🖥️ Terminal Commands Cheat Sheet

A personal reference for commonly used terminal commands.

---

## 📁 Navigation & File Management

```bash
pwd                        # Print working directory
ls                         # List files in current directory
ls -la                     # List all files (including hidden) with details
cd folder/                 # Change directory
cd ..                      # Go up one level
cd ~                       # Go to home directory
cd -                       # Go to previous directory

mkdir folder               # Create a new directory
mkdir -p a/b/c             # Create nested directories

touch file.txt             # Create a new empty file
cp file.txt copy.txt       # Copy a file
cp -r folder/ dest/        # Copy a folder recursively
mv file.txt new_name.txt   # Rename or move a file
rm file.txt                # Delete a file
rm -rf folder/             # Delete a folder and its contents (⚠️ irreversible)
```

---

## 📄 Viewing & Editing Files

```bash
cat file.txt               # Print file contents
less file.txt              # Scroll through file (q to quit)
head -n 20 file.txt        # Show first 20 lines
tail -n 20 file.txt        # Show last 20 lines
tail -f file.txt           # Follow file in real-time (great for logs)

nano file.txt              # Open file in nano editor
vim file.txt               # Open file in vim editor
code file.txt              # Open file in VS Code
```

---

## 🔍 Searching

```bash
grep "text" file.txt           # Search for text in a file
grep -r "text" ./              # Search recursively in a directory
grep -i "text" file.txt        # Case-insensitive search
grep -n "text" file.txt        # Show line numbers

find . -name "*.txt"           # Find files by name
find . -type d -name "logs"    # Find directories by name
find . -mtime -7               # Files modified in last 7 days

which python3                  # Find location of a command
```

---

## 🧑‍💻 Permissions

```bash
chmod +x script.sh         # Make a file executable
chmod 755 file             # rwx for owner, r-x for others
chmod -R 755 folder/       # Apply recursively

chown user:group file      # Change file owner
sudo chown -R user ./      # Change owner recursively with sudo
```

---

## 📦 Package Management

### apt (Ubuntu/Debian)
```bash
sudo apt update            # Update package list
sudo apt upgrade           # Upgrade all packages
sudo apt install package   # Install a package
sudo apt remove package    # Remove a package
sudo apt autoremove        # Remove unused packages
```

### brew (macOS)
```bash
brew update                # Update Homebrew
brew install package       # Install a package
brew uninstall package     # Remove a package
brew list                  # List installed packages
brew upgrade               # Upgrade all packages
```

---

## 🐍 Python

```bash
python3 --version              # Check Python version
python3 script.py              # Run a Python script
pip install package            # Install a Python package
pip install -r requirements.txt  # Install from requirements file
pip list                       # List installed packages
pip freeze > requirements.txt  # Export installed packages

# Virtual environments
python3 -m venv venv           # Create a virtual environment
source venv/bin/activate       # Activate (Linux/macOS)
venv\Scripts\activate          # Activate (Windows)
deactivate                     # Deactivate virtual environment
```

---

## 📦 Node.js & npm

```bash
node --version             # Check Node version
node script.js             # Run a JS file
npm init -y                # Init a new project
npm install                # Install all dependencies
npm install package        # Install a package
npm install -D package     # Install as dev dependency
npm uninstall package      # Remove a package
npm run dev                # Run dev script
npm run build              # Run build script
npx package                # Run a package without installing
```

---

## 🐙 Git

```bash
git init                          # Initialize a repo
git clone <url>                   # Clone a repository
git status                        # Check repo status
git add .                         # Stage all changes
git add file.txt                  # Stage a specific file
git commit -m "message"           # Commit changes
git push origin main              # Push to remote
git pull                          # Pull latest changes
git fetch                         # Fetch without merging

# Branches
git branch                        # List branches
git branch new-branch             # Create a branch
git checkout new-branch           # Switch to a branch
git checkout -b new-branch        # Create and switch
git merge branch-name             # Merge a branch
git branch -d branch-name         # Delete a branch

# History & Diffs
git log --oneline                 # Compact commit history
git diff                          # Show unstaged changes
git diff --staged                 # Show staged changes

# Undo
git restore file.txt              # Discard unstaged changes
git reset HEAD~1                  # Undo last commit (keep changes)
git reset --hard HEAD~1           # Undo last commit (discard changes ⚠️)
git stash                         # Stash changes temporarily
git stash pop                     # Re-apply stashed changes
```

---

## 🐳 Docker

```bash
docker ps                         # List running containers
docker ps -a                      # List all containers
docker images                     # List images
docker pull image:tag             # Pull an image
docker run -it image bash         # Run container interactively
docker run -d -p 8080:80 image    # Run detached with port mapping
docker stop container_id          # Stop a container
docker rm container_id            # Remove a container
docker rmi image_id               # Remove an image
docker build -t name:tag .        # Build an image from Dockerfile
docker exec -it container bash    # Enter running container
docker logs container_id          # View container logs
docker-compose up -d              # Start services (detached)
docker-compose down               # Stop services
```

---

## 🌐 Networking

```bash
ping google.com                # Test connectivity
curl https://example.com       # Make a GET request
curl -X POST -d '{}' <url>    # Make a POST request
curl -O https://example.com/file.zip  # Download a file
wget https://example.com/file.zip     # Download a file

ifconfig                       # Show network interfaces (macOS/Linux)
ip addr                        # Show IP addresses (Linux)
netstat -tulnp                 # Show open ports
lsof -i :3000                  # Show what's using port 3000
kill -9 $(lsof -t -i:3000)    # Kill process on port 3000
ssh user@host                  # Connect via SSH
scp file.txt user@host:/path   # Copy file over SSH
```

---

## ⚙️ Process Management

```bash
top                            # Show running processes
htop                           # Interactive process viewer
ps aux                         # List all processes
ps aux | grep python           # Filter processes by name
kill PID                       # Kill process by PID
kill -9 PID                    # Force kill a process
pkill -f script.py             # Kill by name/pattern
jobs                           # List background jobs
command &                      # Run command in background
fg                             # Bring job to foreground
```

---

## 🗜️ Archives & Compression

```bash
tar -czvf archive.tar.gz folder/    # Compress a folder
tar -xzvf archive.tar.gz            # Extract a tar.gz
tar -xzvf archive.tar.gz -C dest/   # Extract to a directory
zip -r archive.zip folder/          # Create a zip
unzip archive.zip                   # Extract a zip
unzip archive.zip -d dest/          # Extract to a directory
```

---

## 🌍 Environment Variables

```bash
printenv                       # Print all env variables
echo $HOME                     # Print a specific variable
export MY_VAR="value"          # Set a variable (current session)
unset MY_VAR                   # Remove a variable

# Add to shell config for persistence
echo 'export MY_VAR="value"' >> ~/.bashrc
source ~/.bashrc               # Reload bash config
source ~/.zshrc                # Reload zsh config
```

---

## 💡 Handy Shortcuts & Tips

```bash
# Redirect output
command > file.txt             # Write stdout to file (overwrite)
command >> file.txt            # Append stdout to file
command 2> error.log           # Write stderr to file
command &> all.log             # Write both stdout and stderr

# Pipes
ls -la | grep ".txt"           # Pipe output into grep
cat file.txt | wc -l           # Count lines in a file
history | grep git             # Search command history

# Misc
clear                          # Clear terminal screen
history                        # Show command history
!!                             # Repeat last command
!grep                          # Repeat last grep command
alias ll='ls -la'              # Create a command shortcut
man command                    # Open manual for a command
command --help                 # Quick help for a command
```

---

## ⌨️ Keyboard Shortcuts (Terminal)

| Shortcut | Action |
|---|---|
| `Ctrl + C` | Kill current process |
| `Ctrl + Z` | Suspend current process |
| `Ctrl + D` | Exit / EOF |
| `Ctrl + L` | Clear screen |
| `Ctrl + A` | Jump to beginning of line |
| `Ctrl + E` | Jump to end of line |
| `Ctrl + U` | Delete from cursor to start |
| `Ctrl + K` | Delete from cursor to end |
| `Ctrl + R` | Search command history |
| `Tab` | Autocomplete |
| `↑ / ↓` | Scroll through history |

---

> 📝 **Note:** Commands may vary slightly between Linux, macOS, and Windows (WSL). Always check `man <command>` or `<command> --help` for full options.

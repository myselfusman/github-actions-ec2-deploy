# 🚀 Production-Grade Next.js CI/CD Deployment to EC2

This repository contains a complete production-style CI/CD pipeline for deploying a **Next.js application** to an **AWS EC2 (Ubuntu) server** using GitHub Actions.

The project demonstrates real-world DevOps practices including automated builds, atomic deployments, process management, and reverse proxy configuration.

---

# 📌 Project Objective

To design and implement a fully automated CI/CD pipeline that:

* Deploys automatically on push to the `main` branch
* Builds the Next.js application inside GitHub Actions (CI environment)
* Transfers production-ready build artifacts to EC2
* Uses versioned releases for safe deployments
* Switches deployments atomically using a `current` symlink
* Manages the app process with PM2
* Serves traffic through Nginx reverse proxy

---

# 🏗️ Architecture Overview

```
Developer Push → GitHub Repository
                     ↓
              GitHub Actions (CI)
                     ↓
            Install Dependencies
                     ↓
               Build Next.js
                     ↓
          Create Timestamped Release
                     ↓
             Rsync Files to EC2
                     ↓
          Update "current" Symlink
                     ↓
                Restart via PM2
                     ↓
                Nginx Reverse Proxy
                     ↓
                     Users
```

---

# ⚙️ Technologies Used

* GitHub Actions (CI/CD)
* Next.js
* Node.js
* rsync
* SSH (Key-based authentication)
* PM2 (Node.js process manager)
* Nginx (Reverse proxy)
* AWS EC2 (Ubuntu)
* Linux system administration

---

# 🔐 Secure Authentication Setup

Authentication is handled using SSH key-based authentication.

### Key Setup Process

1. SSH key pair generated locally.
2. Public key added to EC2 server:

   ```bash
   ~/.ssh/authorized_keys
   ```
3. Private key stored securely in GitHub repository secrets.

### GitHub Secrets Used

* `EC2_SSH_KEY`
* `EC2_HOST`
* `EC2_USER`

The private key never exists on the production server.

---

# 📂 Server Directory Structure

All deployments follow a release-based structure:

```
/var/www/app
├── releases/
│   ├── 20260213063542/
│   ├── 20260214081210/
│   └── ...
└── current -> /var/www/app/releases/20260214081210
```

### Deployment Behavior

* Every deployment creates a new timestamped release folder.
* The `current` symlink is updated to point to the newest release.
* The application is restarted using PM2.

This approach ensures atomic deployments and enables easy rollback.

---

# 🚀 Deployment Flow Explained

## 1️⃣ Code Push

A push to the `main` branch triggers the GitHub Actions workflow.

## 2️⃣ Build Phase (CI Environment)

Inside GitHub runner:

```bash
npm install
npm run build
```

The production-ready `.next` build is generated in CI, not on EC2.

## 3️⃣ Release Creation

A new release directory is created on EC2:

```bash
/var/www/app/releases/<timestamp>
```

## 4️⃣ File Synchronization

Built files are transferred using `rsync`.

## 5️⃣ Activation

The `current` symlink is updated:

```bash
ln -sfn /var/www/app/releases/<timestamp> /var/www/app/current
```

## 6️⃣ Process Restart

```bash
pm2 restart myapp
```

Nginx continues routing traffic to the running application.

---

# 🛠️ Key Production Decisions

## ✅ Build in CI (Not on EC2)

Building on small EC2 instances can cause memory crashes (Exit code 137 / OOM).

By building inside GitHub Actions:

* Server memory usage is minimized
* Deployments are more stable
* Production server remains lightweight

## ✅ Atomic Deployments

Using a symlink-based deployment strategy ensures:

* No partial deployments
* Safe version switching
* Reduced downtime
* Easy rollback capability

## ✅ PM2 for Process Management

PM2 ensures:

* Application stays running
* Automatic restarts on crash
* Startup on server reboot

---

# 🔄 First-Time EC2 Setup Commands

Run once on the server:

```bash
pm2 start npm --name myapp -- start
pm2 save
pm2 startup
sudo systemctl restart nginx
```

This ensures the application auto-starts after reboot.

---

# 🧠 Challenges Solved During Implementation

This project involved debugging and resolving:

* Invalid GitHub Actions YAML structure
* SSH authentication failures
* GitHub Secrets misconfiguration
* EC2 memory crash (Exit code 137 / OOM)
* 502 Bad Gateway (Nginx → app not running)
* Missing build artifacts during rsync
* PM2 process initialization errors

Each issue was analyzed and resolved using systematic troubleshooting.

---

# 📈 Skills Demonstrated

* CI/CD pipeline design
* Production deployment strategy
* Linux server administration
* SSH key management
* Reverse proxy configuration
* Memory and resource troubleshooting
* Debugging runtime and deployment errors
* Atomic release architecture

---

# 🔮 Future Improvements

* Automatic cleanup of old releases
* One-command rollback to previous release
* Zero-downtime reload strategy
* Health checks before activation
* Docker-based deployment pipeline
* Monitoring and centralized logging

---

# 👨‍💻 Author

Built as part of a hands-on DevOps learning journey focused on mastering CI/CD pipelines and production-ready deployment practices.

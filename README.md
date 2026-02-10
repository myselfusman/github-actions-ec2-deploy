# Next.js EC2 Deployment with GitHub Actions

This repository demonstrates how to deploy a Next.js application to an EC2/VPS server using **GitHub Actions**, **SSH**, and an **atomic release strategy**.

The purpose of this project is to build a real-world CI/CD deployment pipeline similar to what is commonly used in production environments.

---

## 🚀 What this repository does

* Automatically deploys code on every push to the `main` branch using **GitHub Actions**
* Connects to an **EC2 server via SSH**
* Deploys application files using **rsync**
* Creates **timestamped releases** inside `/opt/app/releases`
* Updates a `current` symlink to point to the latest release
* Ensures **atomic deployments** (no partial or broken deployments)

---

## 🧠 Why this approach is used

This deployment strategy is widely used in real systems because:

* Deployments are fully **automated and repeatable**
* Each deployment is stored as a separate release (easy rollback)
* The `current` symlink switch is atomic and safe
* SSH credentials are handled securely using **GitHub Secrets**
* No manual server access is required after initial setup

---

## 📁 Server directory structure

On the EC2 server, deployments follow this structure:

```bash
/opt/app
├── releases/
│   ├── 2026.02.10_172435/
│   ├── 2026.02.10_180012/
│   └── ...
└── current -> /opt/app/releases/2026.02.10_180012
```

* Each deployment creates a new timestamped directory
* The `current` symlink always points to the active version.

---

## 🔐 Authentication and security

* SSH key pair is generated locally
* The **public key** is added to the EC2 server (`~/.ssh/authorized_keys`)
* The **private key** is stored securely in GitHub Actions secrets

Secrets used in GitHub Actions:

* `EC2_SSH_KEY`
* `EC2_HOST`
* `EC2_USER`

The private key never exists on the EC2 server.

---

## ⚙️ Technologies used

* GitHub Actions
* SSH
* rsync
* Linux (EC2 / VPS)
* Next.js
* Git & GitHub

---

## 📌 Current scope

* This repository focuses only on **deployment automation**
* Application runtime (PM2, Docker, Nginx, etc.) is intentionally not included
* Designed as a learning and reference project for CI/CD fundamentals

---

## 🔜 Possible future improvements

* Add Next.js build steps
* Add PM2 or Docker for application runtime
* Add rollback support
* Automatically clean up old releases
* Add environment variable management

---

## ✍️ Author

Built as part of a hands-on DevOps learning journey.

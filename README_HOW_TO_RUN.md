# Notes App Deployment Guide (Docker + VM)

This guide explains how to deploy the **Notes App** (Node.js backend + React frontend) to any Linux-based VM using Docker.

---

## ✅ Prerequisite

- Docker must be installed on the VM

---

## 🐳 Docker Images

- Backend: `vico958/notes-backend`
- Frontend: `vico958/notes-frontend`

---

## 🔧 1. Create a Docker Network

This allows frontend and backend containers to communicate by name.

```bash
sudo docker network create notes-app-network
```

---

## 🚀 2. Run the Backend Container

```bash
sudo docker run -d \
  --name backend \
  --network notes-app-network \
  -p 5000:5000 \
  vico958/notes-backend
```

---

## 🌐 3. Run the Frontend Container

```bash
sudo docker run -d \
  --name frontend \
  --network notes-app-network \
  -p 80:80 \
  -e BACKEND_URL=backend:5000 \
  vico958/notes-frontend
```

---

## ✅ 4. Access the App

Visit:

```
http://<your-vm-external-ip>
```

You should see the Notes frontend and be able to read and create notes.

---

## 🔁 Troubleshooting

```bash
# Check running containers
sudo docker ps

# View logs
sudo docker logs backend
sudo docker logs frontend

# Restart container
sudo docker restart backend

# Stop and remove container
sudo docker stop backend && sudo docker rm backend
```

Make sure port 80 is open in your VM's firewall settings.

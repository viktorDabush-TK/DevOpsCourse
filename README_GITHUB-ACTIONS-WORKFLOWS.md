This project uses GitHub Actions for CI/CD automation. Below is a summary of how it works:

CI Workflow (.github/workflows/ci.yml)
Triggered on: Every pull_request

Runs:

Backend tests and Docker image build

Frontend build and Docker image build

CD Workflow (.github/workflows/cd.yml)
Triggered on: Push to main

Runs:

Builds backend and frontend Docker images

Pushes images to Docker Hub

SSH into VM and redeploys using docker-compose


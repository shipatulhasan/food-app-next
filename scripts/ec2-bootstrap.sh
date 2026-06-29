#!/usr/bin/env bash
set -euo pipefail

APP_USER="${APP_USER:-ubuntu}"
APP_DIR="${APP_DIR:-/opt/food-app}"
NODE_MAJOR="${NODE_MAJOR:-22}"

echo "Updating packages..."
sudo apt-get update -y

echo "Installing required packages..."
sudo apt-get install -y \
    curl \
    git \
    nginx \
    rsync \
    unzip \
    ca-certificates

echo "Installing Node.js..."

if ! command -v node >/dev/null 2>&1 || ! node -v | grep -q "^v${NODE_MAJOR}"; then
    curl -fsSL https://deb.nodesource.com/setup_${NODE_MAJOR}.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

echo "Installing PM2..."

if ! command -v pm2 >/dev/null 2>&1; then
    sudo npm install -g pm2
fi

echo "Creating application directory..."

sudo mkdir -p "$APP_DIR"

sudo chown -R "$APP_USER:$APP_USER" "$APP_DIR"

echo "Enabling nginx..."

sudo systemctl enable nginx
sudo systemctl start nginx

echo "Bootstrap completed."

node -v
npm -v
pm2 -v
nginx -v
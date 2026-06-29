#!/usr/bin/env bash

set -euo pipefail

APP_DIR="${APP_DIR:-/opt/food-app}"

cd "$APP_DIR"

echo "Installing dependencies..."

npm ci

echo "Building Next.js..."

npm run build

echo "Creating PM2 app..."

if pm2 describe food-app >/dev/null 2>&1; then

    echo "Restarting application..."

    pm2 restart food-app

else

    echo "Starting application..."

    pm2 start npm \
        --name food-app \
        -- start

    pm2 save
fi

echo "Generating nginx configuration..."

sudo tee /etc/nginx/sites-available/food-app >/dev/null <<'EOF'
server {

    listen 80;

    server_name _;

    location / {

        proxy_pass http://127.0.0.1:3000;

        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;

        proxy_set_header Connection "upgrade";

        proxy_set_header Host $host;

        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_cache_bypass $http_upgrade;

    }

}
EOF

sudo rm -f /etc/nginx/sites-enabled/default

sudo ln -sfn \
    /etc/nginx/sites-available/food-app \
    /etc/nginx/sites-enabled/food-app

sudo nginx -t

sudo systemctl reload nginx

echo "Deployment completed."

pm2 status
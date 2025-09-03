#!/bin/bash

# ServiceSnap Deployment Script
# Run this script on your server after cloning the repository

echo "🚀 Starting ServiceSnap deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build completed successfully!"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    npm install -g pm2
fi

# Stop existing process if running
echo "🛑 Stopping existing process..."
pm2 stop servicesnap 2>/dev/null || true
pm2 delete servicesnap 2>/dev/null || true

# Start the application
echo "🚀 Starting the application..."
pm2 start npm --name "servicesnap" -- start

# Save PM2 configuration
pm2 save

echo "✅ Deployment completed successfully!"
echo "🌐 Your app should be running on http://localhost:3000"
echo "📊 Check status with: pm2 status"
echo "📝 View logs with: pm2 logs servicesnap"


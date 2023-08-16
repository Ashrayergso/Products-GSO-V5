```bash
#!/bin/bash

# Update system packages
sudo apt-get update

# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node -v
npm -v

# Install Python and pip
sudo apt-get install -y python3.8 python3-pip

# Verify installation
python3 --version
pip3 --version

# Navigate to the Next.js app directory
cd nextjs-app

# Install Next.js app dependencies
npm install

# Build the Next.js app
npm run build

# Start the Next.js app
npm start &

# Navigate to the Flask backend directory
cd ../flask-backend

# Install Flask backend dependencies
pip3 install -r requirements.txt

# Start the Flask backend
python3 app.py
```
# Starts with a base image containing Node.js version 20 running on Alpine Linux (a lightweight Linux distribution)
FROM node:20-alpine

# Sets the working directory inside the container to '/app'
WORKDIR /app

# Copies the 'package.json' and 'package-lock.json' files (if they exist) from your host machine to the '/app' directory in the container
COPY package*.json ./

# Executes the command 'npm install --production' inside the container to install only the necessary dependencies for production
RUN npm install --production

# Copies all the files and directories from current directory (first dot) on the host machine to the '/app' directory in the container (second dot)
COPY . .

# Declares that the application inside the container will be listening on port 3000
EXPOSE 3000

# Specifies the command to run when the container starts (here, it will execute the bundled file using Node.js)
CMD ["node", "dist/bundle.js"]
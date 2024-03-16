# Use the oven/bun base image
FROM oven/bun

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY . .

# Install git
RUN apt-get update && apt-get install -y git

# Install dependencies
RUN bun install

# Building Website
RUN bun run build

# Expose the port Astro will run on
EXPOSE 7053

# Start the app
CMD [ "bun", "preview", "--host" ]
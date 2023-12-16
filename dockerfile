# Use the oven/bun base image
FROM oven/bun

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY . .

# Install dependencies
RUN bun install


# Expose the port Astro will run on
EXPOSE 7053

# Start the app
CMD [ "bun", "start" ]
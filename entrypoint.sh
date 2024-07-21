#!/bin/bash
# set -e

# Run migrations
npx sequelize-cli db:migrate

# Start the application
exec "$@"

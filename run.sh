#!/bin/bash

if [ "$1" == "prod" ]; then
    echo "Running in production mode..."
    docker-compose -f docker-compose.prod.yml up --build
elif [ "$1" == "dev" ]; then
    echo "Running in development mode..."
    docker-compose -f docker-compose.dev.yml up --build
else
    echo "Invalid argument. Please use 'prod' or 'dev'."
fi
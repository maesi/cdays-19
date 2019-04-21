#!/bin/bash
docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"
docker push maesi/cdays-19
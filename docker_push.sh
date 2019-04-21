#!/bin/bash
docker login -u "$DOCKER_USERNAME" -u "$DOCKER_PASSWORD"
docker push maesi/cdays-19
# Docker Expert 🏆

Docker with more complex setups

## About

This project creates a more complex configuration by making Docker images for production and development. Furthermore, the project consist of a Nginx HTTP server, a Express backend, a PostgreSQL database, and a React client.

The configuration was done combining knowledge of these tutorials:

- [Dockerizing a React application with Nodejs Postgres and NginX](https://www.youtube.com/watch?v=-pTel5FojAQ&t=35s): Explains how to setup a project with a persistent database and Ngix to avoid using localhost when fetching on the frontend.
- [How to deploy a multi container Docker compose on Amazon EC2](https://everythingdevops.dev/how-to-deploy-a-multi-container-docker-compose-application-on-amazon-ec2/): To learn how to do Docker compose on the cloud instance. Solution: Install Docker compose on the instance and download the `docker-compose.yml` file by cloning a Git repository.

## Installation

It contains Dockerfiles for client, server which you should push to your docker hub to be able
You can run it in development mode: `docker-compose up`

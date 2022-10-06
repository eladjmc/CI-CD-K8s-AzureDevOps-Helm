# Weight tracker web-app CI-CD with AKS
We already configured a CI/CD process that package the application into container images and deploy them on our infrastructure. This week instead of using docker on top of VMs we are going to use Kubernetes, a very popular tool that will help us manage containers in a reliable way accross multiple servers.

## Project Overview

First of all we will create a Kubernetes Cluster in Microsoft’s Azure Kubernetes Service (AKS) for the project infrastructure.

 <img src="https://bootcamp.rhinops.io/images/aks-1.png" width="500" height="200" />

 Once the cluster is created we are going to run our NodeWeightTracker application on top of AKS. This means that we need to write all the configuration files that are needed for running our application in a Kubernetes Cluster.

 <img src="https://bootcamp.rhinops.io/images/kubernetes-resources.png" width="600" height="220" />

 Finally we will, update or CI/CD process to deploy our already dockerized application into the Kubernetes cluster.

 <img src="https://bootcamp.rhinops.io/images/k8s-cicd.png" width="900" height="800" />


## Kubernetes and Azure-DevOps documentation

 - [Azure-DevOps](https://docs.microsoft.com/en-us/azure/devops/?view=azure-devops)
 - [Kubernetes documantaion](https://kubernetes.io/docs/home/)
 - [Nanas Youtube guide using Kubernetes](https://www.youtube.com/watch?v=X48VuDVv0do&ab_channel=TechWorldwithNana)




## FAQ

#### Are we using the same boot-camp project we used so far?

Yes we will, it should work the same way it did every time we used it.

#### Do we need to make all the CD-CD in the same yaml?

Yes we are using a yaml because updates for Azure DevOps will likely be in yaml form and not the classic editor and we should get use to it.


## Project guidelines

<img src="https://bootcamp.rhinops.io/images/docker-envs.png" width="1000" height="600" />


In this project we will manage the code of our application using one of the most common and simple Git workflow usually called the “Feature Branch Workflow” in which branches named with the prefix “feature/” are used to work on the code independently and then the code is integrated into the master/main branch to be deployed in the target environments.


<img src="https://bootcamp.rhinops.io/images/feature-branch.png" width="600" height="300" />


To optimize the worflow you will need to configure a branch policy for the master/main branch to enforce Code Review by using Pull Requests and a Build Validation Policy to ensure that the changes are ok before integrating them.

### Finally, the CI/CD process must meet the following requirements:


- For Feature Branches:
    - Whenever a new change is pushed to a feature branch this should start the CI pipeline that will take the Dockerfile from the repository and build an image to ensure that everything is ok (note that we don’t want to push it to the registry since we have not yet reached the integration branch, our only objective is to provide the developer with an indication of whether their code is correct or not).


- For Master/Main Branch:
    - Whenever a new change is pushed to the main/master branch this should start the CI process that will take the Dockerfile from the repository, build an image and push it to a container registry (Azure ACR).
    
    - Then the CD consists on pulling the image from the registry and deploying it into the staging environments automatically (Continuous Deployment) and then wait for approval to deploy into the Production environment (Continuous Delivery)




## Goals


- Provision an AKS cluster
- Install the Nginx ingress controller
- Deploy the NodeWeightTracker application on AKS meeting the following requirements:
  - The NodeWeightTracker application must be accessible from the internet
  - The NodeWeightTracker application must be exposed to the internet on port 80
  - The NodeWeightTracker must have at least 3 instances to ensure high availability
  - Use configmaps/secrets to store your application configurations
  - You must expose your application using the ingress controller


## Considerations


- You can deploy the AKS cluster from the Azure Portal with minimal changes on the default configurations (Infrastructure as Code is not required)
- Note that with our type of azure subscription it’s not possible to deploy a cluster across multiple availability zones

## Expected Result
- An AKS cluster with the NodeWeightTracker is deployed following the requirements listed above.
- Your application lifecycle is automated with a CI/CD process)



# Node.js Weight Tracker

![Demo](docs/build-weight-tracker-app-demo.gif)

This sample application demonstrates the following technologies.

* [hapi](https://hapi.dev) - a wonderful Node.js application framework
* [PostgreSQL](https://www.postgresql.org/) - a popular relational database
* [Postgres](https://github.com/porsager/postgres) - a new PostgreSQL client for Node.js
* [Vue.js](https://vuejs.org/) - a popular front-end library
* [Bulma](https://bulma.io/) - a great CSS framework based on Flexbox
* [EJS](https://ejs.co/) - a great template library for server-side HTML templates

**Requirements:**

* [Node.js](https://nodejs.org/) 14.x
* [PostgreSQL](https://www.postgresql.org/) (can be installed locally using Docker)
* [Free Okta developer account](https://developer.okta.com/) for account registration, login

## Install and Configuration

1. Clone or download source files
1. Run `npm install` to install dependencies
1. If you don't already have PostgreSQL, set up using Docker
1. Create a [free Okta developer account](https://developer.okta.com/) and add a web application for this app
1. Copy `.env.sample` to `.env` and change the `OKTA_*` values to your application
1. Initialize the PostgreSQL database by running `npm run initdb`
1. Run `npm run dev` to start Node.js

The associated blog post goes into more detail on how to set up PostgreSQL with Docker and how to configure your Okta account.

# AWS Serverless TypeScript Project

## Overview

This project is a basic AWS Serverless application written in TypeScript. It includes a simple Lambda function (`hello`) that responds to HTTP POST requests, demonstrating the integration of AWS Lambda with API Gateway using the Serverless Framework and TypeScript.


### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `handlers` - containing code base and configuration for your lambda functions
- `schema` - containing schemas to validate lambda

```
.
├── src
│   ├── hanlders                # Lambda configuration and source code folder
│   │   ├── hello.ts            # `Hello` lambda source code
│   └── schema                  # schemas
│       └── hello.ts            # schema validate
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
├── tsconfig.paths.json         # Typescript paths
└── webpack.config.js           # Webpack configuration
```


## Prerequisites

- Node.js (version specified in `package.json`)
- AWS CLI, configured with appropriate access rights
- Serverless Framework

## Setup and Deployment

1. **Installation**:
   ```bash
   npm install
2. **Deploy to AWS**:
   ```bash
   serverless deploy


### Usage
Endpoint: The application exposes a POST endpoint at /hello.
Functionality: Sending a POST request to this endpoint will trigger the hello Lambda function, which returns a simple greeting message.   



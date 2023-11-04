# Saga Pattern Implementation For Distributed Payment Transactions

This project serves as a demonstrative example for effectively managing long-running Payment Transactions within a Microservice Architecture. Leveraging technologies such as Node.js, Kafka, and MongoDB, this implementation showcases the Saga pattern.

For a detailed understanding of the Saga pattern, refer to [Microservices.io - Saga Pattern](https://microservices.io/patterns/data/saga.html).

## Successful Flow:
![Successful Flow](./saga.png)

## Rollback Flow:
![Rollback Flow](./saga-rollback.png)

## Prerequisites

Ensure you have the following prerequisites installed:

- [Kafka](https://kafka.apache.org/downloads)
- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Setup

### Kafka Setup

Start Kafka using Docker Compose:

```bash
docker compose up -d 
```

### Install Packages

Install necessary packages for each service:

```bash
yarn --cwd ./kafkaBroker
```

```bash
yarn --cwd ./orchestratorService
```

```bash
yarn --cwd ./orderService
```

```bash
yarn --cwd ./paymentService
```

### Create Topics

Initialize Kafka topics:

```bash
yarn --cwd ./kafkaBroker start
```

## Running the Services

Start the services in separate terminals:

### Orchestrator Service

```bash
cd orchestratorService && yarn start
```

### Order Service

```bash
cd orderService && yarn start
```

### Payment Service

```bash
cd paymentService && yarn start
```

Feel free to delve into the code and make adjustments to suit your specific requirements. If you encounter any questions or issues, don't hesitate to reach out. Happy coding!
# Saga Pattern Implementation For Distibuted Payment Transactions
A demonstration project for handling long-running Payment Transactions in Microservice Architecture using Nodejs, Kafka, MongoDB

### Concepts
https://microservices.io/patterns/data/saga.html

### Successful Flow:
![Implementation](./saga.png)

### Rollback Flow:
![Implementation](./saga-rollback.png)
## Prerequisites

 - [Kafka](https://kafka.apache.org/downloads)
 - [Nodejs](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)


## Setup

### Kafka Setup

``` 
docker compose up -d 
```

### Install packages

```
yarn --cwd ./kafkaBroker
```

```
yarn --cwd ./orchestatorService
```

```
yarn --cwd ./orderService
```

```
yarn --cwd ./paymentService
```

### Create topics
```
yarn --cwd ./kafkaBroker start
```


## Run

```
cd orchestatorService && yarn start
```

```
cd orderService && yarn start
```

```
cd paymentService && yarn start
```

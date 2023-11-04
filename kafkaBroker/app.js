
const kafka = require('kafka-node');

const Producer = require('../kafkaBroker/kafkaHandler/Producer');

const producer = new Producer();

const topics = [
  { topic: 'ORDER_SERVICE', partitions: 1, replicationFactor: 1 },
  { topic: 'PAYMENT_SERVICE', partitions: 1, replicationFactor: 1 },
  { topic: 'STOCK_SERVICE', partitions: 1, replicationFactor: 1 },
  { topic: 'ORCHESTATOR_SERVICE', partitions: 1, replicationFactor: 1 },
  { topic: 'SERVICE_REPLY', partitions: 1, replicationFactor: 1 }
]

producer.createTopic(topics).then(res => {
  console.log("create topic");
  console.log(res)
})
  .catch(err => {
    console.log(`Error ${err}`)
  })


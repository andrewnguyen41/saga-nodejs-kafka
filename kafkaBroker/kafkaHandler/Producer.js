const Kafka = require('kafka-node');

const Producer = Kafka.Producer;
const client = new Kafka.KafkaClient();

const admin = new Kafka.Admin(client);

let producer;

let producerReady;

const bindListeners = function bindListeners() {

  producerReady = new Promise((resolve, reject) => {
    producer.on('ready', () => {
      console.log('producer ready');
      resolve(producer);
    });

    producer.on('error', err => {
      console.log('producer err', err);
      reject(err);
    })
  })
};

const initializeProducer = () => {
  producer = new Producer(client);

  bindListeners();
}

const ProducerService = function ProducerService() {
  initializeProducer();
}

ProducerService.prototype.produce = function produce(
  topic,
  messages,
  partition = 0,
) {
  // Returns data if producer success
  return producerReady
    .then(producer => {

      const payload = [{ topic, messages, partition }];
      return new Promise((resolve, reject) => {
        producer.send(payload, function(err, data) {
          if (err) {
            console.log('Error while producing data in this service')
            reject(err);
          }
          resolve(data);
        })
      });
    });
}

ProducerService.prototype.createTopic = function createTopic(
  topics
) {
  return producerReady.then(producer => {
    return new Promise((resolve, reject) => {
      producer.createTopics(topics, (err, res) => {
        if (err) {
          console.log('Error while creating a topic');
          reject(err);
        }

        console.log('Topics created successfully');
        resolve(res);

      })
    })
  })
}

module.exports = ProducerService;

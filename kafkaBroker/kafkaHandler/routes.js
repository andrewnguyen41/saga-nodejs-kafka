const Producer = require('./Producer');

const producer = new Producer();


const messageTypeToTopicMessaging = {
  ORDER_CREATION_TRANSACTIONS: ["ORCHESTATOR_SERVICE"],
  PAYMENT_FAILED_STATE: ["ORCHESTATOR_SERVICE"],
  ORDER_PREPARED: ["ORCHESTATOR_SERVICE"],
  OUT_OF_STOCK_ORDER: ["ORCHESTATOR_SERVICE"],
  PAYMENT_COMPLETED_STATE: ["ORCHESTATOR_SERVICE"],
  EXECUTE_PAYMENT: ["PAYMENT_SERVICE"],
  PREPARE_ORDER: ["STOCK_SERVICE"],
  ORDER_PAYMENT_COMPLETED: ["SERVICE_REPLY"]
}

module.exports = (payload) => {
  if (!payload.topic) {
    return;
  }
  console.log("payload", payload);
  messageTypeToTopicMessaging[payload.topic].forEach(topic => {
    producer.produce(topic, JSON.stringify(payload));
  })
}

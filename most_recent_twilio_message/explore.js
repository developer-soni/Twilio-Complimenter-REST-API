const Twilio = require("twilio");

const client = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// console.log(client.messages.list());
client.messages
  .list()
  .then((messages) =>
    console.log(`The most recent message is ${messages[0].body}`)
  )
  .catch((err) => console.log(err));

console.log("Gathering your message log");

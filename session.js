require('dotenv').config();

const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
const input = require('input');

const { API_ID, API_HASH } = process.env;
const session = new StringSession('');
const client = new TelegramClient(session, API_ID, API_HASH, {});

(async function run() {
  await client.start({
    onError: () => {},
  });

  await client.start({
    phoneNumber: async () => await input.text('number ?'),
    password: async () => await input.text('password?'),
    phoneCode: async () => await input.text('Code ?'),
    onError: (err) => console.log(err),
  });

  console.log(client.session.save());
})();

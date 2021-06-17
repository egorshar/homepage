require('dotenv').config();

const _ = require('lodash');
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const { API_ID, API_HASH, SESSION } = process.env;

exports.handler = async function (event, context) {
  const session = new StringSession(SESSION);
  const client = new TelegramClient(session, Number(API_ID), API_HASH, {});

  await client.start();

  const result = await client.invoke(
    new Api.messages.GetHistory({
      peer: 'opg_dev',
      limit: 500,
    })
  );

  const channel = {
    title: _.get(
      result,
      ['chats', 0, 'title'],
      'Организованная Программерская Группировка'
    ),
  };

  const messages = _.map(
    _.filter(result.messages, { className: 'Message' }),
    (message) => ({
      date: message.date,
      text: message.message,
    })
  );

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    isBase64Encoded: false,
    body: {
      channel,
      messages,
    },
  };
};

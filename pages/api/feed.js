import { map } from 'lodash';
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';
import { LATEST_TELEGRAM_POSTS } from '../../utils/constants';

export default async function handler(req, res) {
  try {
    const client = new TelegramClient(
      new StringSession(process.env.BOT_SESSION),
      parseInt(process.env.TELEGRAM_APP_API_ID),
      process.env.TELEGRAM_APP_API_HASH,
      { connectionRetries: 5 }
    );

    await client.start({
      botAuthToken: process.env.BOT_TOKEN,
    });

    const result = await client.invoke(
      new Api.channels.GetMessages({
        channel: process.env.CHANNEL_NAME,
        id: LATEST_TELEGRAM_POSTS,
      })
    );

    res.status(200).json(map(result.messages, ({ date, message }) => ({
      date,
      message
    })));
  } catch (e) {
    res.status(500).json({ error: 'failed to load data' });
  }
}

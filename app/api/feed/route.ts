import { map, pick } from 'lodash';
import { cache } from 'react';
import { NextResponse } from 'next/server';

import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

import { LATEST_TELEGRAM_POSTS } from '../../../utils/constants';

const getTelegramPosts = cache(async () => {
  const client = new TelegramClient(
    new StringSession(process.env.BOT_SESSION),
    parseInt(process.env.TELEGRAM_APP_API_ID || ''),
    process.env.TELEGRAM_APP_API_HASH || '',
    { connectionRetries: 5 },
  );

  await client.start({
    botAuthToken: process.env.BOT_TOKEN || '',
  });

  return await client.invoke(
    new Api.channels.GetMessages({
      channel: process.env.CHANNEL_NAME,
      id: LATEST_TELEGRAM_POSTS || [],
    }),
  );
})

export const GET = async () => {
  try {
    const result = await getTelegramPosts();

    // cache for a week
    return NextResponse.json(map(result.messages, (message) => pick(message, 'date', 'message', 'entities', 'media')));
  } catch (e) {
    return NextResponse.json({ error: 'failed to load data' }, { status: 500 });
  }
}
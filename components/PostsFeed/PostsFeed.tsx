'use client';

import { map } from 'lodash';
import { useEffect, useState } from 'react';
import { EntityMessage } from 'telegraf-entity';
import { snakeCase } from 'change-case-all';

export default function PostFeed() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    (async () => {
      let fetchedPosts = [];

      try {
        const response = await fetch('/api/feed');

        fetchedPosts = await response.json();
      } catch (e) {
        // do nothing
      }

      console.log(fetchedPosts);
      setPosts(fetchedPosts);
    })();
  }, []);

  return (
    <>{map(posts, (post) => {
      const formatter = new EntityMessage(post.message, map(post.entities, (entity) => ({
        ...entity,
        type: snakeCase(entity.className.replace('MessageEntity', ''))
      })));

      console.log(formatter)
      // let htmlContent = formatter.html;
      // let markdownContent = formatter.markdown;

      return (
        <div key={post.id}>
          {formatter.html}
        </div>
      );
    })}</>
  );
}
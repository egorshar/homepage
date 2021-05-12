import get from "lodash/get";
import reduce from "lodash/reduce";
import shuffle from "lodash/shuffle";
import fetch from "isomorphic-unfetch";

import { MY_INSTAGRAM_ACCESS_TOKEN } from "./constants";

export default async function () {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url&access_token=${MY_INSTAGRAM_ACCESS_TOKEN}`
  );
  const data = await res.json();

  const posts = reduce(
    get(data, "data", []),
    (result, post) => {
      if (get(post, "caption", "").indexOf("egorsharhomepage") > -1) {
        result.push(post);
      }

      return result;
    },
    []
  );

  return shuffle(posts);
}

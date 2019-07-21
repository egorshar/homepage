
import get from 'lodash/get'
import reduce from 'lodash/reduce'
import shuffle from 'lodash/shuffle'
import fetch from 'isomorphic-unfetch'

import { INSTAGRAM_DOMAIN, MY_INSTAGRAM_USER_ID } from './constants';

export const generatePostURL = short_code => `${INSTAGRAM_DOMAIN}/p/${short_code}/`

export default async function () {
  const res = await fetch(`${INSTAGRAM_DOMAIN}/explore/tags/egorsharhomepage/?__a=1`)
  const data = await res.json()

  const posts = reduce(
    get(data, 'graphql.hashtag.edge_hashtag_to_media.edges', []),
    (result, { node }) => {
      if (parseInt(node.owner.id) === MY_INSTAGRAM_USER_ID) {
        result.push(node)
      }

      return result
    },
    []
  )

  return shuffle(posts)
}

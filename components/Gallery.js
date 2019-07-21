
import get from 'lodash/get'
import map from 'lodash/map'
import { Fragment, Component } from 'react'
import ContentLoader from 'react-content-loader'
import Img from 'react-image'

import getInstagramPosts, { generatePostURL } from '../utils/instagram'

class InstagramPosts extends Component {
  state = {
    posts: [],
    index: 0
  }

  componentDidMount() {
    getInstagramPosts()
      .then(posts => this.setState({ posts }))
  }

  loader() {
    return (
      <ContentLoader
        height={580}
        width={400}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        style={{maxWidth: 500}}
      >
        <circle cx="100" cy="7" r="1" />
        <rect x="1" y="1" rx="0" ry="0" width="416" height="496" />
        <rect x="1" y="519" rx="0" ry="0" width="272" height="16" />
      </ContentLoader>
    )
  }

  image(children, post) {
    return (
      <Fragment key={post.id}>
        <p>
          {children}
        </p>
        <p>
          <a href={generatePostURL(post.shortcode)} target="_blank" rel="nofollow noopener">
            {get(post, 'edge_media_to_caption.edges[0].node.text', generatePostURL(post.shortcode))}
          </a>
        </p>
      </Fragment>
    )
  }

  onImageClick() {
    const { posts, index } = this.state

    let nextIndex = index + 1;
    if (nextIndex > posts.length - 1) nextIndex = 0

    this.setState({ index: nextIndex })
  }

  render() {
    const { posts, index } = this.state

    if (!posts.length) {
      return this.loader()
    }

    const post = posts[index];

    return (
      <div className="gallery">
        <Img
          key={post.id}
          src={post.display_url}
          alt=""
          className="portrait"
          onClick={this.onImageClick.bind(this)}
          container={children => this.image(children, post)}
          loaderContainer={children => (
            <>{children}</>
          )}
          loader={this.loader()}
        />

        <button
          className="next-slide"
          onClick={this.onImageClick.bind(this)}
        >
          ⏩
        </button>

        <style jsx>{`
          .gallery {
            max-width: 500px;
            display: flex;
            flex-direction: column;
            position: relative;
          }

          .gallery :global(img) {
            width: 100%;
            max-width: 500px;
            border-radius: 4px;
            box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.15);
            cursor: e-resize;
          }

          .next-slide {
            position: absolute;
            top: 0;
            left: 100%;
            height: calc(100% - 45px);
            padding: 0;
            width: 50px;
            border: 0;
            background: none;
            box-shadow: none;
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  }
}

export default InstagramPosts;

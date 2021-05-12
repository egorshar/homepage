import get from 'lodash/get';
import { Component, Fragment, Suspense } from 'react';
import ContentLoader from 'react-content-loader';
import { useImage } from 'react-image';

import getInstagramPosts from '../utils/instagram';

function ImageComponent(props) {
  const { src, isLoading } = useImage({
    srcList: props.src,
  });

  return <img src={src} onClick={props.onClick} onLoad={props.onLoad} />;
}

class InstagramPosts extends Component {
  state = {
    posts: [],
    index: 0,
    captionIsVisible: false,
  };

  componentDidMount() {
    getInstagramPosts().then((posts) => {
      this.setState({ posts });
    });
  }

  loader() {
    return (
      <ContentLoader
        uniqueKey="insta-gallery"
        height={580}
        width={400}
        speed={2}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        style={{ maxWidth: 500 }}
      >
        <circle cx="100" cy="7" r="1" />
        <rect x="1" y="1" rx="0" ry="0" width="416" height="496" />
        <rect x="1" y="519" rx="0" ry="0" width="272" height="16" />
      </ContentLoader>
    );
  }

  image(post) {
    return (
      <Fragment key={post.id}>
        <p>
          <ImageComponent
            src={post.media_url}
            onLoad={() => this.setState({ captionIsVisible: true })}
            onClick={this.onImageClick.bind(this)}
          />
        </p>
        {this.state.captionIsVisible && (
          <p>
            <a href={post.permalink} target="_blank" rel="nofollow noopener">
              {get(post, 'caption', post.media_url)}
            </a>
          </p>
        )}
      </Fragment>
    );
  }

  onImageClick() {
    const { posts, index } = this.state;

    let nextIndex = index + 1;
    if (nextIndex > posts.length - 1) nextIndex = 0;

    this.setState({ index: nextIndex, captionIsVisible: false });
  }

  render() {
    const { posts, index } = this.state;

    if (!posts.length) {
      return this.loader();
    }

    const post = posts[index];

    return (
      <div className="gallery">
        <Suspense fallback={this.loader()}>{this.image(post)}</Suspense>

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
            box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
            cursor: e-resize;
          }

          .gallery :global(a) {
            white-space: normal;
          }
        `}</style>
      </div>
    );
  }
}

export default InstagramPosts;

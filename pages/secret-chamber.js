
import YouTube from 'react-youtube'

import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <c is="div" cell="row" cell-s="row">
        <p>Chamber of Secrets ✨</p>
        <p>You've got Rickrolled</p>
        <p>
          <YouTube
            videoId="dQw4w9WgXcQ"
            opts={{
              playerVars: {
                autoplay: 1
              }
            }}
          />
        </p>
      </c>
    </Layout>
  )
}

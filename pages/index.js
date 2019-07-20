
import Gallery from '../components/Gallery';
import Layout from '../components/Layout';
import SocialProfiles from '../components/SocialProfiles';

import '../static/global.css';

export default function Blog() {
  return (
    <Layout>
      <c cell="1-4" cell-s="row">
        <p>Hi, there 👋</p>
        <p>
          My name is Egor and I'm a frontend-developer<br />
          Over the last {(Math.floor((Date.now() - new Date('Sat Sep 15 2012 11:34:49 GMT+0300 (MSK)')) / (1000 * 60 * 60 * 24 * 30 * 12)))} years I have been working in amoCRM<br />
          Currently not available for hire
        </p>

        <SocialProfiles />
      </c>

      <c cell="5.." cell-s="row">
        <Gallery />
      </c>
    </Layout>
  );
}

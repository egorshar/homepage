
import { withRouter } from 'next/router'
import Link from 'next/link'

import Logo from './Logo';

const Layout = props => (
  <>
    {
      props.router.pathname !== '/'
        ? <Link href="/">
            <a><Logo /></a>
          </Link>
        : <Logo />
    }
    <grid columns="9">
      {props.children}
    </grid>
    <style jsx>{`
      a {
        text-decoration-color: rgba(0,0,0,1);
      }
      a:hover, a:active {
        color: black;
      }
    `}</style>
  </>
);

export default withRouter(Layout);

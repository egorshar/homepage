import { withRouter } from 'next/router';
import Link from 'next/link';

const Logo = (props) => (
  <div>
    <img
      src="/static/shar.webp"
      className="logo"
      alt='Spere pronounces like "shar" in Russian'
    />

    <style jsx>{`
      div {
        width: 83px;
        height: 73px;
        overflow: hidden;
      }

      img {
        width: 100px;
        height: 100px;
        margin-left: -20px;
        margin-top: -20px;
      }
    `}</style>
  </div>
);

const LogoWithIndex = (props) =>
  props.router.pathname !== '/' ? (
    <Link href="/">
      <a>
        <Logo isIndex={false} />

        <style jsx>{`
          a {
            outline: none;
            box-shadow: none;
          }
        `}</style>
      </a>
    </Link>
  ) : (
    <Logo isIndex />
  );

export default withRouter(LogoWithIndex);

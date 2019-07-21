
import { withRouter } from 'next/router'
import Link from 'next/link'

const Logo = props => (
  <>
    <h2>
      egor<span className="shar">shar</span>
      {props.isIndex && (
        <Link href="/secret-chamber">
          <button>✨</button>
        </Link>
      )}
    </h2>
    <style jsx>{`
      h2 {
        display: flex;
        padding: 12px 0;
        margin-bottom: var(--lineHeight);
      }
      .shar {
        color: #fff;
        position: relative;
      }
      .shar:before {
        content: "";
        position: absolute;
        background: #000;
        width: 105%;
        height: 160%;
        top: 50%;
        transform: translate(-1px, -50%);
        border-radius: 70px;
        z-index: -1;
      }

      button {
        padding: 0;
        border: 0;
        background: none;
        margin-left: auto;
        cursor: pointer;
      }
      button:active {
        outline: none;
      }
    `}</style>
  </>
);

const LogoWithIndex = props => props.router.pathname !== '/'
  ? <Link href="/">
      <a>
        <Logo isIndex={false} />
        <style jsx>{`
          a {
            text-decoration-color: rgba(0,0,0,1);
          }
          a:hover, a:active {
            color: black;
          }
        `}</style>
      </a>
    </Link>
  : <Logo isIndex />

  export default withRouter(LogoWithIndex);

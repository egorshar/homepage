
export default () => (
  <>
    <h2>egor<span className="shar">shar</span></h2>
    <style jsx>{`
      h2 {
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
        height: 173%;
        top: 50%;
        transform: translate(-1px, -47%);
        border-radius: 70px;
        z-index: -1;
      }
    `}</style>
  </>
);


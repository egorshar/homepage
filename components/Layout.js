
import Logo from './Logo';

const Layout = props => (
  <>
    <Logo />
    <grid is="div" columns="9">
      {props.children}
    </grid>
  </>
);

export default Layout;

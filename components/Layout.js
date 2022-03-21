import Logo from './Logo';

const Layout = (props) => (
  <r-grid class="main" columns="6">
    <r-cell order="-9" class="menu" span="2" span-s="2">
      <Logo />
    </r-cell>

    {props.children}
  </r-grid>
);

export default Layout;

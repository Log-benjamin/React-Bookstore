import {
  Link, useMatch, useResolvedPath,
} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-container">
        <h1 className="Bookstore-CMS">Bookstore CMS</h1>
        <Customelink to="/">BOOKS</Customelink>
        <Customelink to="/catagories">CATAGORIES</Customelink>
      </ul>
      <i className="Mask fa-solid fa-user fa-lg" />
    </nav>
  );
}

function Customelink({ to, children }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  );
}

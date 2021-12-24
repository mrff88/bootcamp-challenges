import { Link } from 'react-router-dom';
import './_Nav.scss';

const Nav = () => {
  return (
    <header className="header">
      <h1 className="header__title">Fake Shop</h1>
      <nav className="header__nav" role={'navigation'}>
        <ul className="list" role={'menubar'}>
          <li role={'menuitem'}>
            <Link className="list__link" to={'/'} tabIndex={'1'}>
              Inicio
            </Link>
          </li>
          <li role={'menuitem'}>
            <Link className="list__link" to={'/about'} tabIndex={'2'}>
              Acerca de
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

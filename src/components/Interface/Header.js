import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import classes from './Header.module.css';

const Header = () => (
  <header className={classes.header}>
    <div className={classes.container}>
      <nav>
        <div className={classes.navItems}>
          <h1>Bookstore CMS</h1>
          <ul>
            <li>
              <NavLink to="/">BOOKS</NavLink>
            </li>
            <li>
              <NavLink to="/categories">CATEGORIES</NavLink>
            </li>
          </ul>
        </div>

        <div className="p-icon">
          <NavLink to="/">
            <FaUserAlt className={classes.profile} />
          </NavLink>
        </div>
      </nav>
    </div>
  </header>
);
export default Header;

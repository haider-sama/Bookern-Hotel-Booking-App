import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAppContext } from "../context/AppContext";
import { FaBars, FaTimes } from 'react-icons/fa';
import UserMenu from './UserMenu';

const Header = () => {
    const { isLoggedIn } = useAppContext();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    };

    const navItems = [
        { name: 'Home', href: '#', current: true },
        { name: 'Company', href: '#', current: false },
        { name: 'Marketplace', href: '#', current: false },
        { name: 'Features', href: '#', current: false },
        { name: 'Team', href: '#', current: false },
        { name: 'Contact', href: '#', current: false }
    ];

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-slate-900">
            <Link to="/">Bookern</Link>
          </span>
          <div className="flex items-center lg:order-2">

          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
            <Link
              to="/sign-in"
              className="text-gray-800 hover:bg-gray-200 focus:ring-4 
              focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 
              mr-2 focus:outline-none "
            >
              Login
            </Link>
            <Link
              to="/sign-in"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 
              focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 
              lg:py-2.5 mr-2 dark:bg-primary-600 focus:outline-none"
            >
              Get Started
            </Link>
           </> 
          )}
            <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg 
            lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
            focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
          <div
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`block py-2 pr-4 pl-3 ${
                      item.current
                        ? 'text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0'
                        : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0'
                    }`}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

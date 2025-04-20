import { NavLink, Link } from 'react-router-dom';
import './Header.sass';
import { useEffect, useRef } from 'react';

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/form/create', display: 'Add Expense' },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const handleStickyHeader = () => {
    window.addEventListener('scroll',() => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList .add('sticky_header')
      } else {
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll',handleStickyHeader);
  });
  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');
  return (
    <header className='header' ref={headerRef}>
      <div className='container'>


        {/* Middle: Navigation Menu */}
        <nav className='navigation' ref={menuRef} onClick={toggleMenu}>
          <ul className='menu'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} className="nav-btn">
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Rightmost: User Avatar & Login Button */}
        <div className='nav-right'>
    
          <Link to='/login'>
            <button className='login-btn'>Login</button>
          </Link>
         
        </div>

      </div>
    </header>
  );
};

export default Header;

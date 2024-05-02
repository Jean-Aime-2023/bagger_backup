import React, { useState, useEffect } from 'react';
import './navbar.css';
import log from '../../assets/images/loggo.webp';


// Define props interface for NavbarItem
interface NavbarItemProps {
  label: string;
  link?: string;
  onClick?: () => void; // Add onClick function
}

// Define props interface for Navbar
interface NavbarProps {
  items: NavbarItemProps[];
  logo: string;
}

// Navbar functional component
const Navbar: React.FC<NavbarProps> = ({ items, logo }) => {
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        const navbar = document.querySelector('.navbar');
        if (navbar) {
          setNavbarVisible(footerPosition > window.innerHeight);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-4 navbar max-h-[80px] z-20 ${
        navbarVisible ? 'visible' : 'hidden'
      }`}
    >

      <section className="w-full h-full px-72 max-md:px-36 flex flex-row justify-between items-center gap-[20rem]">
        <section className="cursor-pointer flex items-center gap-4">
          <img src={log} alt="" className="w-8 h-8 rounded-full" />
          <p className="text-yellow-500 text-xl font-bold">Burger</p>
        </section>
        <div className="flex flex-row">
        <ul className="flex space-x-4">
        {items.map((item, index) => (
          <li key={index} className="nav-item">
            {item.link ? (
              <a
                href={item.link}
                className="nav-link text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </a>
            ) : (
              <button
                onClick={item.onClick}
                className="nav-link bg-white px-4 py-2 rounded-md text-black"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

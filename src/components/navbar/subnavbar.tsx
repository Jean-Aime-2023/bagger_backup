import React from 'react';

interface NavbarItemProps {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  isActive?: boolean; // Added isActive prop
}

interface NavbarProps {
  items: NavbarItemProps[];
}

const SubNavbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav className="py-4">
      <div className="mx-auto flex justify-center items-center ">
        <ul className="flex space-x-4 gap-[10rem]">
          {items.map((item, index) => (
            <li key={index} className="nav-item">
              <button
                onClick={item.onClick}
                className={`nav-link flex items-center ${item.isActive ? 'text-yellow-500' : 'text-white'}`}
              >
                {item.icon && <span className="mr-4">{item.icon}</span>}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SubNavbar;

import React, { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import SubNavbar from '../components/navbar/subnavbar';
import borrowIcon from '../assets/icons/borrow.svg';
import DashboardModal from '../components/dashboardtable';
import BorrowModal from '../components/borrowTable/BorrowModal';
import './Home.css';

const HomePage = () => {
  const [showDashboardModal, setShowDashboardModal] = useState(true);
  const [showBorrowModal, setShowBorrowModal] = useState(false);

  const openDashboardModal = () => {
    setShowDashboardModal(true);
    setShowBorrowModal(false); // Close BorrowModal if open
  };

  const openBorrowModal = () => {
    setShowBorrowModal(true);
    setShowDashboardModal(false); // Close DashboardModal if open
  };

  const navbarItems = [
    {
      icon: <MdDashboard />,
      label: 'Dashboard',
      onClick: openDashboardModal,
      isActive: showDashboardModal, // Set isActive based on showDashboardModal state
    },
    {
      icon: <img src={borrowIcon} alt="Borrow" />,
      label: 'Borrow',
      onClick: openBorrowModal,
      isActive: showBorrowModal, // Set isActive based on showBorrowModal state
    },
  ];

  return (
    <div className="flex flex-col mt-[13rem]">
      <div className="text-white h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-7xl font-bold items-center ">Welcome to Oasis</h1>
          <h6 className="text-3xl mb-10">The first hybrid crypto lending platform</h6>
        </div>

        <div className="flex flex-row text-2xl">
          <SubNavbar items={navbarItems} />
        </div>
        <hr className='border border-gray-700 w-[70%]' />
      </div>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        id="mymodel"
        className='top-[-20rem]'
      >
        {showDashboardModal && <DashboardModal />}
        {showBorrowModal && <BorrowModal />}
      </div>
    </div>
  );
};

export default HomePage;


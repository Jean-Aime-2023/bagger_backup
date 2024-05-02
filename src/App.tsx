import React from 'react';
import Navbar from './components/navbar/navbar';
import loggo from './assets/images/loggo.webp';
import HomePage from './pages/Home';
import Footer from './pages/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Borrow from './pages/Borrow';

const App: React.FC = () => {
  const navbarItems = [
    { label: 'Connect Wallet', onClick: () => alert('Connect Wallet clicked') },
  ];

  return (
    <BrowserRouter>
      <div className="flex flex-col gap-[5rem] h-screen w-screen">
        <Navbar items={navbarItems} logo={loggo} />
        <Routes>
          <Route index path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Borrow />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

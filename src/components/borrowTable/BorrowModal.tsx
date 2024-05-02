import React, { useState, useEffect } from 'react';
// import BorrowTable from './BorrowTable';
import { TabsDemo } from '../Tabs1';

interface TableCounts {
  erc20: number;
  erc721: number;
  erc1155: number;
}

const BorrowModal = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showBorrowTable, setShowBorrowTable] = useState(false);
  const [tableCounts, setTableCounts] = useState<TableCounts>({
    erc20: 0,
    erc721: 2, // Default count for ERC721
    erc1155: 0,
  });

  useEffect(() => {
    // Open ERC721 table by default
    setShowBorrowTable(true);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const openBorrowTable = (type: keyof TableCounts) => {
    setShowBorrowTable(false);
    const counts = { ...tableCounts };
    if (type === 'erc20') {
      counts.erc20 = 7;
      counts.erc721 = 0;
      counts.erc1155 = 0;
    } else if (type === 'erc721') {
      counts.erc20 = 0;
      counts.erc721 = 2;
      counts.erc1155 = 0;
    } else if (type === 'erc1155') {
      counts.erc20 = 0;
      counts.erc721 = 0;
      counts.erc1155 = 1;
    }
    setTableCounts(counts);
    setShowBorrowTable(true);
  };

  // // Define different data arrays for each type of table
  // const erc20Data = [
  //   "No USDC deposited.",
  //   "No wstETH deposited.",
  //   "No weETH deposited.",
  //   "No sUSDe deposited.",
  //   "No ptEzETH deposited.",
  //   "No ptRsETH deposited.",
  //   "No ptRsweth deposited."

  // ];

  // const erc721Data = [
  //   "No items to display.",
  //   "No items to display.",
   
  // ];

  // const erc1155Data = [
  //   "No items to display.",
  // ];

  return (
    <div className="modal w-full mx-[20rem] flex flex-col gap-10">
      <div className="modal-content">
        <p className='text-white text-2xl'>Borrow shezUSD or shezETH against approved collaterals.</p>
      </div>
      <div className='flex justify-center'>
        <TabsDemo/>
      </div>
    </div>
  );
};

export default BorrowModal;

import React from 'react';
import { RiCamera3Fill } from 'react-icons/ri';
// import CustomButton from './Button';
// import CollectionTable from './collectionTable';
import { TableDemo } from '../TableDemo1';
import { TableDemo2 } from '../TableDemo2';

const DashboardModal = () => {
  return (
    <div className="modal w-full mx-[20rem]">
      <div className="modal-content flex flex-col gap-[1.5rem]">
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          className="text-3xl text-white font-bold"
        >
          <RiCamera3Fill style={{ marginRight: '5px' }} />
          <span>ALL VAULTS</span>
        </div>
        <div className="col flex flex-row mt-4 justify-between w-full space-x-4">
          <div className="text-xs sm:text-sm text-gray-400">
            TVL <br />
            <p className="text-white font-bold">107.37K USD</p>
          </div>
          <div className="text-xs sm:text-sm text-gray-400">
            NFTs Deposited <br />
            <p className="text-white font-bold">11</p>
          </div>
          <div className="text-xs sm:text-sm text-gray-400">
            Total Debt <br />
            <p className="text-white font-bold">113.05K USD</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-lg text-[#fbd654]">
            GET CREDIT ON YOUR DIGITAL ASSETS
          </div>
          <div className="text-base text-gray-400 font-light">
            Borrow
            <a
              href="https://curve.fi/#/ethereum/pools/factory-stable-ng-118/deposit"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center tap-highlight-transparent outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-[#fbd654] ml-1"
            >
              ShezUSD
              <svg
                className="flex mx-1 text-current self-center"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                shapeRendering="geometricPrecision"
                focusable="false"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
              </svg>
            </a>
            at the lowest rate on the market and farm in the OASIS pools
          </div>
        </div>

        <div className="p-4 bg-content1 rounded-lg shadow-sm w-full overflow-x-auto">
          <TableDemo />
        </div>

        <hr />

        <button className='px-4 py-2 rounded-xl border-2 border-gray-700 flex flex-row w-[20rem] items-center'>
          <section><img src="https://www.shezmu.io/_next/image?url=%2Fimages%2Foasis%2Fbayc.png&w=64&q=75" alt="" /></section>
          Bored Ape Yatch Club
        </button>

        <div className="col flex flex-row mt-4 justify-between w-full space-x-4">
          <div className="text-xs sm:text-sm text-gray-400">
            pETH Oracle Floor <br />
            <p className="text-white font-bold">11.77 ETH</p>
          </div>

          <div className="text-xs sm:text-sm text-gray-400">
            Deposited <br />
            <p className="text-white font-bold text-xl">0</p>
          </div>
          <div className="text-xs sm:text-sm text-gray-400">
            TLTV <br />
            <p className="text-white font-bold text-xl">60%</p>
          </div>
          <div className="text-xs sm:text-sm text-gray-400">
            Liq. Threshold <br />
            <p className="text-white font-bold text-xl">70%</p>
          </div>
          <div className="text-xs sm:text-sm text-gray-400">
            Available <br />
            <p className="text-white font-bold text-xl">50.00K shezUSD</p>
          </div>
        </div>
        {/* <CollectionTable /> */}
        <div className=''>
        <TableDemo2 content={''}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardModal;

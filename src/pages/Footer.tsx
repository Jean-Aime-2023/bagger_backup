import React from 'react';
import log from '../assets/images/loggo.webp';
import { FaDiamond } from 'react-icons/fa6';
// import { FaTelegram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { DiGitMerge } from 'react-icons/di';
import { IoGitPullRequestSharp } from 'react-icons/io5';
import { MdOutlineWifiTetheringErrorRounded } from 'react-icons/md';
import { FaUniregistry } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col mx-56 gap-[5rem] py-10 mt-[-11rem]">
      <main className="flex flex-row gap-[7rem] text-2xl">
        {/* Your main content here */}
        <div className="flex flex-col gap-3">
          <p>OTHERS</p>
          <hr />
          <ul className="flex flex-col gap-2">
            <li className="flex flex-row items-center gap-5 cursor-pointer">
              <section>
                <IoGitPullRequestSharp />
              </section>
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noreferrer"
              >
                LooksRareOpen in new tab
              </a>
            </li>
            <li className="flex flex-row items-center gap-5 cursor-pointer">
              <section>
                <MdOutlineWifiTetheringErrorRounded />
              </section>
              <a
                href="https://rarible.com/collection/0x1d1b79a8c50df0e11019f822cd3d7e5d485ebdaa"
                target="_blank"
                rel="noreferrer"
              >
                Rarible
              </a>
            </li>
            <li className="flex flex-row items-center gap-5 cursor-pointer">
              <section>
                <FaUniregistry />
              </section>
              <a
                href="https://x2y2.io/collection/shezmu-guardian/items"
                target="_blank"
                rel="noreferrer"
              >
                X2Y2
              </a>
            </li>
            <li className="flex flex-row items-center gap-5 cursor-pointer">
              <section>
                <DiGitMerge />
              </section>
              <a
                href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x5fE72ed557d8a02FFf49B3B826792c765d5cE162"
                target="_blank"
                rel="noreferrer"
              >
                Uniswap
              </a>
            </li>
            <li className="flex flex-row items-center gap-5 cursor-pointer">
              <section>
                <MdOutlineWifiTetheringErrorRounded />
              </section>
              <a
                href="https://curve.fi/#/ethereum/pools/factory-stable-ng-118/deposit"
                target="_blank"
                rel="noreferrer"
              >
                Curve
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <p>SOCIALS</p>
          <hr />
          <ul>
            <li className="flex flex-row items-center gap-5 cursor-pointer">
              <section>
                <FaDiamond />
              </section>
              <a href="https://t.me/shezmueth" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </li>
            <li className="flex flex-row items-center gap-5 cursor-pointer">
              <section>
                <FaXTwitter />
              </section>
              <a
                href="https://twitter.com/ShezmuTech"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className="flex flex-row items-center gap-5 cursor-pointer">
              <section>
                <DiGitMerge />
              </section>
              <a
                href="https://shezmu.gitbook.io/shezmu/introduction/welcome-to-shezmu"
                target="_blank"
                rel="noreferrer"
              >
                Gitbook
              </a>
            </li>
          </ul>
        </div>
      </main>
      <section className="flex flex-col gap-7">
        <hr className="border border-yellow-500" />
        <div className="flex flow-row justify-between px-5">
          <div className="flex flex-row gap-4">
            <section className="cursor-pointer flex gap-4">
              <img src={log} alt="" className="w-6 h-6 rounded-full" />
              <p className="text-yellow-500 font-bold">Burger</p>
            </section>
            <p className="cursor-pointer">Shezmu</p>
            <p className="cursor-pointer">Guardian</p>
            <p className="cursor-pointer">ShezUSD</p>
          </div>
          <div>
            {' '}
            <p className="text-yellow-500 font-bold">
              © 2024 Burger. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

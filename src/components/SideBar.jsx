
'use client';

import { SampleGrid } from './SampleGrid';

export const SideBar = () => {
  return (
    <>
      <aside id="default-sidebar" className="fixed lg:sticky top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ease-in-out -translate-x-full lg:translate-x-0" aria-label="Sidebar">
        <div className="flex flex-col justify-between h-full px-3 py-4 overflow-y-auto bg-regal-blue dark:bg-gray-800 no-scrollbar">
          <div>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#" className="flex items-center p-2 text-white text-sm rounded-lg dark:text-white hover:bg-[#fff]/10 dark:hover:bg-gray-700 group">
                  <img className="w-4 h-4" src="images/home-icon.png" loading="lazy" decoding="async" alt="Home Icon" />
                  <span className="ms-3">Home</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-white text-sm rounded-lg dark:text-white hover:bg-[#fff]/10 dark:hover:bg-gray-700 group">
                  <img className="w-4 h-4" src="images/orders-icon.png" loading="lazy" decoding="async" alt="Orders Icon" />
                  <span className="ms-3">Orders</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-white text-sm rounded-lg dark:text-white hover:bg-[#fff]/10 dark:hover:bg-gray-700 group">
                  <img className="w-4 h-4" src="images/products-icon.png" loading="lazy" decoding="async" alt="Products Icon" />
                  <span className="ms-3">Products</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-white text-sm rounded-lg dark:text-white hover:bg-[#fff]/10 dark:hover:bg-gray-700 group">
                  <img className="w-4 h-4" src="images/delivery-icon.png" loading="lazy" decoding="async" alt="Delivery Icon" />
                  <span className="ms-3">Delivery</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-white text-sm rounded-lg dark:text-white hover:bg-[#fff]/10 dark:hover:bg-gray-700 group">
                  <img className="w-4 h-4" src="images/marketing-icon.png" loading="lazy" decoding="async" alt="Marketing Icon" />
                  <span className="ms-3">Marketing</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-white text-sm rounded-lg dark:text-white hover:bg-[#fff]/10 dark:hover:bg-gray-700 group">
                  <img className="w-4 h-4" src="images/analytics-icon.png" loading="lazy" decoding="async" alt="Analytics Icon" />
                  <span className="ms-3">Analytics</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-white text-sm rounded-lg dark:text-white bg-[#fff]/10 dark:hover:bg-gray-700 group">
                  <img className="w-4 h-4" src="images/payouts-icon.png" loading="lazy" decoding="async" alt="Payouts Icon" />
                  <span className="ms-3">Payouts</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-white text-sm rounded-lg dark:text-white hover:bg-[#fff]/10 dark:hover:bg-gray-700 group">
                  <img className="w-4 h-4" src="images/discounts-icon.png" loading="lazy" decoding="async" alt="Discounts Icon" />
                  <span className="ms-3">Discounts</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-white text-sm rounded-lg dark:text-white hover:bg-[#fff]/10 dark:hover:bg-gray-700 group">
                  <img className="w-4 h-4" src="images/audience-icon.png" loading="lazy" decoding="async" alt="Audience Icon" />
                  <span className="ms-3">Audience</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-white text-sm rounded-lg dark:text-white hover:bg-[#fff]/10 dark:hover:bg-gray-700 group">
                  <img className="w-4 h-4" src="images/appearance-icon.png" loading="lazy" decoding="async" alt="Appearance Icon" />
                  <span className="ms-3">Appearance</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-white text-sm rounded-lg dark:text-white hover:bg-[#fff]/10 dark:hover:bg-gray-700 group">
                  <img className="w-4 h-4" src="images/plugins-icon.png" loading="lazy" decoding="async" alt="Plugins Icon" />
                  <span className="ms-3">Plugins</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3 py-1.5 px-3 bg-[#353C53] mx-2 rounded">
            <div className="w-9 h-9 bg-[#FFFFFF]/10 rounded p-1.5 flex justify-center items-center">
              <img className="w-4 h-4" src="images/payouts-icon.png" loading="lazy" decoding="async" alt="Payouts Icon" />
            </div>
            <div className="flex flex-col gap-0">
              <p className="text-xs text-[#FFFFFF] font-light">Available Credits</p>
              <p className="text-base text-[#FFFFFF]">398.74</p>
            </div>
          </div>
        </div>
      </aside>

      {/* <SampleGrid /> */}
    </>
  );
}

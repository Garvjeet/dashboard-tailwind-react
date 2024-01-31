export const PageHeader = () => {
  return (
    <div className="flex justify-between items-center sm:gap-4 gap-2 sm:px-8 px-4 py-3 border-b border-[#D9D9D9] sticky top-0 bg-[#FFFFFF] ">
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 m-0 lg:ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-[#fff]/10 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <div className="flex gap-2 sm:gap-4 items-center sm:flex-grow">
        <p className="text-[#1A181E] font-medium text-xl">Payouts</p>
        <div className="flex items-center gap-[6px] text-[#4D4D4D]" bis_skin_checked="1">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
          </svg>
          <p className="hidden sm:block text-xs">How it works</p>
        </div>
      </div>

      <div className="flex items-center gap-2 px-4 py-1.5 sm:py-[9px] focus:outline-none bg-[#F2F2F2] text-[#808080] rounded sm:flex-grow" bis_skin_checked="1">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg>
        <input type="text" placeholder="Search features, tutorials, etc." className="p-0 bg-transparent border-none w-full focus:[box-shadow:none]" />
      </div>

      <div className="flex items-right gap-2 p-0 justify-end sm:flex-grow" bis_skin_checked="1">
        <div className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 bg-[#E6E6E6] rounded-full">
          <img src="/images/header-message-icon.png" />
        </div>
        <div className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 bg-[#E6E6E6] rounded-full">
          <svg stroke="#4c4c4c" fill="#4c4c4c" strokeWidth="0" viewBox="0 0 320 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
        </div>
      </div>
    </div>
  )
}
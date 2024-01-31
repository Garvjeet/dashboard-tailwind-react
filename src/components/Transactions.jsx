import { TableFilterButton } from "./TableFilterButton"
import { Table } from "./Table"

export const Transactions = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-medium text-xl">Transactions | This Month</p>
      <div className="flex gap-2">
        <TableFilterButton text="Payouts" number="22" />
        <TableFilterButton isActive={true} text="Refunds" number="6" />
      </div>
      <div className="flex flex-col rounded-2 px-3 py-3 gap-3 bg-white overflow-x-scroll">
        <div className="flex gap-3 justify-between">
          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#D9D9D9] rounded w-full text-[#808080] max-w-[300px]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg>
            <input className="w-full border-none focus:[box-shadow:none] p-0 placeholder-[#9ca3af]" type="text" placeholder="Order ID or Transactions ID"/>
          </div>

          <div className="flex gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 border border-[#D9D9D9] rounded min-w-[75px] cursor-pointer">
              <p>Sort</p>
              <img className="h-3" src="/images/sort-icon.png" alt="vertical arrow icon" loading="lazy" decoding="async" />
            </div>
            <div className="flex items-center p-2 border border-[#D9D9D9] rounded cursor-pointer">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </div>
          </div>
        </div>

        <div className="overflow-x-scroll">
          <Table />
        </div>
      </div>
    </div>
  )
}
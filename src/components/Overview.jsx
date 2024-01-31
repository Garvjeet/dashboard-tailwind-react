import { RevenueCard } from "./RevenueCard"

export const OverView = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="font-medium text-xl">Overview</p>
        <button className="flex items-center gap-3 text-[#4D4D4D] border rounded px-[14px] py-[6px]">
          <span>This Month</span>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
        </button>
      </div>
      <div className="flex flex-wrap gap-5">
        <RevenueCard
          title="Next Payout"
          orderCount={43}
          amount="8,799.75"
          nextPaymentDate="Today, 4:00PM"
        />
        <RevenueCard
          title="Amount Pending"
          orderCount={13}
          amount="8,65,398"
        />
        <RevenueCard
          title="Amount Processed"
          amount="23,92,312.19"
        />
      </div>
    </section>
  )
}
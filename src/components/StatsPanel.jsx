import { OverView } from "./Overview"
import { Transactions } from "./Transactions"

export const StatsPanel = () => {
  return (
    <div className="flex flex-col p-3 sm:p-8 gap-8 bg-[#fafafa]">
      <OverView />
      <Transactions />
    </div>
  )
}
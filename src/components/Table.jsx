import { tableData } from '../static/transactionTableData';

export const Table = () => {
  return (
    <table className="w-full">
      <thead className="text-[#4D4D4D] bg-[#F2F2F2]">
        <tr>
          <th className="px-3 py-2.5 w-1/5 text-left text-sm font-medium tracking-wider rounded-l">Order ID</th>
          <th className="px-3 py-2.5 w-1/5 text-left text-sm font-medium tracking-wider rounded-l">Status</th>
          <th className="px-3 py-2.5 w-1/5 text-left text-sm font-medium tracking-wider rounded-l">Transaction ID</th>
          <th className="px-3 py-2.5 w-1/5 text-left text-sm font-medium tracking-wider rounded-l">Refund Date</th>
          <th className="px-3 py-2.5 w-1/5 text-right text-sm font-medium tracking-wider rounded-l">Order Amount</th>
        </tr>
      </thead>
      <tbody className="divide-[#E6E6E6]">
        {
          tableData.map((obj, idx) => {
            return (
              <tr className="text-sm border-b border-[#e6e6e6]" key={`transaction-${idx}`}>
                <td className="px-3 py-2.5 whitespace-nowrap text-[#146EB4] font-medium">{obj.orderId}</td>
                <td className="flex gap-1.5 items-center px-3 py-2.5 whitespace-nowrap text-[#4D4D4D]">
                  <span className={"w-2.5 h-2.5 rounded-full " + (obj.isSuccessful ? "bg-green-500" : "bg-[#999999]")}></span>
                  {obj.isSuccessful ? 'Successful' : 'Processing'}
                </td>
                <td className="px-3 py-2.5 whitespace-nowrap text-[#4D4D4D]">{obj.transactionId}</td>
                <td className="px-3 py-2.5 whitespace-nowrap text-[#4D4D4D]">{obj.refundDate}</td>
                <td className="px-3 py-2.5 whitespace-nowrap text-[#4D4D4D] text-right">{obj.amount}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
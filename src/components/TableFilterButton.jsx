export const TableFilterButton = ({
  isActive = false,
  text,
  number
}) => {
  return (
    <div className={"px-4 py-1.5 rounded-full cursor-pointer " + (isActive === true ? "bg-[#146EB4] text-[#FFFFFF]" : "bg-[#E6E6E6] text-[#808080]")}>
      {text} ({number})
    </div>
  )
}
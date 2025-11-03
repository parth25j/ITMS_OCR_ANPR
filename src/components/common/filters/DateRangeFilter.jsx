import React from 'react'

const DateRangeFilter = ({startDate,endDate,handleStartChange,handleEndChange,handleApply}) => {
  return (
    <div className="flex p-1  gap-2 items-center  bg-cardBg rounded-lg shadow-md border-2 border-border">
    <label className="font-semibold text-sm">Start Date:</label>
    <input
      type="date"
      value={startDate}
      onChange={handleStartChange}
      className="border text-sm border-gray-300 rounded px-3  focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <label className="font-semibold text-sm">End Date:</label>
    <input
      type="date"
      value={endDate}
      onChange={handleEndChange}
      className="border text-sm border-gray-300 rounded px-3  focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      onClick={handleApply}
      className="text-sm p-1 bg-Primary text-white rounded hover:bg-blue-700"
    >
      Apply Filter
    </button>


  </div>
  )
}

export default DateRangeFilter
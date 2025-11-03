import React from 'react'

const Tabs = ({data,setSelected,selected}) => {
    
  return (
    <>
      {data.map((item)=>{
        return       <button
        key={item}
        onClick={() => setSelected(item)}
        className={`
      cursor-pointer h-full px-4 rounded-2xl flex items-center justify-center
      ${
        selected === item
          ? "bg-Primary text-white"
          : "hover:bg-secondary text-gray-700"
      }
    `}
      >
        {item}
      </button>
      })}
    </>
  )
}

export default Tabs
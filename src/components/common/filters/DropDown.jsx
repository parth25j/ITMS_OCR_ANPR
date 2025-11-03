import React,{useState} from 'react'

const DropDown = ({ type,heading,style,dropDownItems}) => {

    const [selectedCamera, setSelectedCamera] = useState("");

  
  
    const handleChange = (e) => {
      setSelectedCamera(e.target.value);
      console.log("Selected Camera:", e.target.value);
    };
  

  return (
    <>
  <div className="flex flex-col gap-2">
     
      <select
        value={selectedCamera}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="">{heading}</option>
        {dropDownItems.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {type ==="camera" && (
        <p className="text-sm text-gray-600 mt-1">
          🎥 Currently viewing: <b>{selectedCamera}</b>
        </p>
      )}
    </div>
    
    </>
  )
}

export default DropDown
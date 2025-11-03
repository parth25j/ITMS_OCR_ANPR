import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ClipLoader color="#4F46E5" loading={true} size={60} />
    </div>
  );
};

export default Loader;


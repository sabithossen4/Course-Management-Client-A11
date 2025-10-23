import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] bg-amber-50">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  );
};

export default Loading;
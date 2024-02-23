import React from "react";

const Skeleton = () => {
  const loading_amount = [0, 1, 3, 5, 6, 7, 8];
  return (
    <div className="flex flex-wrap gap-[5px] items-center w-full justify-around py-[5vw]">
      {loading_amount.map((index, each) => {
        return (
          <div className=" w-[90%]  h-[120vw]  md:w-[40vw] md:h-[50vw]   shadow-xl  max-w-[300px] max-h-[400px] bg-[rgba(256,256,256,0.5)] rounded-xl">
            <br></br>
            <div className="w-[90%] mx-auto h-[70%] flex flex-cols items-center justify-around text-[#040404]   shadow-xl mt-[20px]  bg-[rgba(256,256,256,0.3)]  rounded-xl animate-pulse">
              <p>Image Loading......</p>
            </div>
            {/* small dash  */}
            <br />
            <div className="w-[80%] mx-auto shadow-xl h-[10%] bg-[rgba(256,256,256,0.5)]  rounded animate-pulse"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Skeleton;

import Image from "next/image";
import React from "react";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4 mt-3">
      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              src="/general/avatar.png"
              alt="John Doe"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">Atif Aslam</h1>
            <span className="text-textGray text-sm">@atif29</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              src="/general/avatar.png"
              alt="Modi"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">Modi Gomutro</h1>
            <span className="text-textGray text-sm">@modi71</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              src="/general/avatar.png"
              alt="Shammer"
              width={100}
              height={100}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">Shameer islam</h1>
            <span className="text-textGray text-sm">@shameer702</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
    </div>
  );
};

export default Recommendations;

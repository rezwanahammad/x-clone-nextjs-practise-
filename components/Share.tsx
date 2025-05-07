import Image from "next/image";
import React from "react";

const Share = () => {
  return (
    <div className="p-4 flex gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden ">
        <Image
          src="/general/avatar.png"
          alt="avatar"
          width={100}
          height={100}
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 mt-2">
        <input type="text" placeholder="What's happening?" className="bg-transparent outline-none text-l" />
      </div>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex gap-4 flex-wrap">
          <Image
            src="/icons/image.svg"
            alt="image"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/icons/gif.svg"
            alt="image"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/icons/poll.svg"
            alt="image"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/icons/emoji.svg"
            alt="image"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/icons/schedule.svg"
            alt="image"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/icons/location.svg"
            alt="image"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
        <button
          className="bg-white text-black rounded-full px-4 py-2"
          aria-label="Post"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Share;

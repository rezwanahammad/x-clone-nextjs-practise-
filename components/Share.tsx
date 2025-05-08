"use client";

import { Shareaction } from "@/actions";
import Image from "next/image";
import React, { useState } from "react";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  return (
    <form className="p-4 flex gap-3" action={Shareaction}>
      <div className="w-10 h-10 rounded-full overflow-hidden ">
        <Image
          src="/general/avatar.png"
          alt="avatar"
          width={100}
          height={100}
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 mt-2">
        <input
          type="text"
          name="desc"
          placeholder="What's happening?"
          className="bg-transparent outline-none text-l"
        />
      </div>
      <div className="flex items-center justify-between gap-4 flex-wrap ">
        <div className="flex gap-4 flex-wrap">
          <input
            id="media-upload"
            type="file"
            name="file"
            onChange={handleMediaChange}
            className="hidden"
            title="Upload Media"
          />
          <label htmlFor="media-upload">
            <Image
              src="/icons/image.svg"
              alt="image"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </label>
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
    </form>
  );
};

export default Share;

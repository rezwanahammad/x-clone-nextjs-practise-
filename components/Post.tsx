import Image from "next/image";
import React from "react";
import Postinfo from "./Postinfo";
import Postinteractions from "./Postinteractions";

const Post = () => {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 from-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            className="fill-gray-600 group-hover:fill-green-700"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>raad reposted </span>
      </div>
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden relative">
          <Image src="/general/avatar.png" alt="" width={100} height={100} />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          {/* TOP */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold">Raad</h1>
              <span className="text-gray-600">@raad27</span>
              <span className="text-gray-600">1 day ago</span>
            </div>
            <Postinfo />
          </div>

          {/* TEXT,MEDIA */}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            fugiat quasi maxime doloremque nostrum quos deleniti enim ut
            nesciunt fugit earum quia quam, vero numquam dolore excepturi veniam
            libero sed?
          </p>
          <Image src="/general/post.jpeg" alt="" width={600} height={600} />
          <Postinteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;

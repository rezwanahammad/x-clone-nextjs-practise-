import Link from "next/link";
import Image from "next/image";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4 mt-3">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's"} Happening
      </h1>
      {/* TREND EVENT */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            src="/general/rafa.webp"
            alt="event"
            width={120}
            height={120}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">
            Nadal v Federer Grand Slam
          </h2>
          <span className="text-sm text-textGray">Last Night</span>
        </div>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image src="icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">
            Entertainment • Trending
          </span>
          <Image src="icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">SRKGala</h2>
        <span className="text-textGray text-sm">12K posts</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">World • Trending</span>
          <Image src="icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">PakIndia</h2>
        <span className="text-textGray text-sm">29K posts</span>
      </div>
    </div>
  );
};

export default PopularTags;

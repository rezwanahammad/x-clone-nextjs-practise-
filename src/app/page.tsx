import Imagek from "../../components/Imagek";
import Feed from "../../components/Feed";
import Share from "../../components/Share";
import Link from "next/link";

export default function Page() {
  return (
    <div className="">
      <div className="px-4 pt-4 pb-3 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link
          href="/"
          className="pb-3 flex items-center border-b-4 border-blue-600"
        >
          For you
        </Link>
        <Link href="/" className="pb-3 flex items-center ">Following</Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
}

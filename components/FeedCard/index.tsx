import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-600 p-4 hover:bg-slate-800 cursor-pointer transition-all border-r-0 border-l-0 border-b-0">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-1">
          <div>
            <Image
              src="https://avatars.githubusercontent.com/u/88819781?v=4"
              height={50}
              width={50}
              alt="Profile image"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="col-span-11 text-sm">
          <h5>Prem Bheemuni</h5>
          <p>
            This is my first tweet and would be my last tweet also. virat kohli
            just smashed a hundred and he crossed fifty hundreds, and keep going
          </p>
          <div className="flex justify-between text-xl mt-5 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

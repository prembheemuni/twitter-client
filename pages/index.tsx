import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import React, { useCallback } from "react";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarButtons: TwitterSideBarButton[] = [
  { title: "Home", icon: <BiHomeCircle /> },
  { title: "Explore", icon: <BiHash /> },
  { title: "Notifications", icon: <BsBell /> },
  { title: "Messages", icon: <BsEnvelope /> },
  { title: "BookMark", icon: <BsBookmark /> },
  { title: "Twitter Blue", icon: <BiMoney /> },
  { title: "Profile", icon: <BiUser /> },
  { title: "More Options", icon: <SlOptions /> },
];

export default function Home() {
  const handleLoginWithGoogle = useCallback((cred: CredentialResponse) => {},
  []);
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-14">
          <div className="text-3xl hover:bg-gray-600 h-fit rounded-full py-3 px-5 translate-all cursor-pointer w-fit">
            <BsTwitter />
          </div>
          <div className="mt-4 text-sm pr-4">
            <ul>
              {sidebarButtons.map((icon: TwitterSideBarButton) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-600 px-5 py-2 rounded-full w-fit cursor-pointer mt-2"
                  key={icon.title}
                >
                  <span className="text-xl">{icon.icon}</span>
                  <span>{icon.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-1">
              <button className="bg-[#1d9bf0] py-2 px-4 rounded-full w-full text-sm">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-600 h-[100%] overflow-y-auto no-scrollbar">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-4 p-3">
          <div className="border bg-slate-700 p-5 rounded-lg">
            <h1 className="my-2 text-2xl">New to Twitter</h1>
            <GoogleLogin onSuccess={(creds) => handleLoginWithGoogle(creds)} />
          </div>
        </div>
      </div>
    </div>
  );
}

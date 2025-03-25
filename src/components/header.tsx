"use client";
import { MdFamilyRestroom } from "react-icons/md";

export default function Header() {
  return (
    <div className="bg-[#e6eef5] w-full flex flex-col items-center py-5 gap-5">
      <div className="flex w-full max-w-[1280px] justify-around gap-20 items-center">
        <div className="text-[32px] font-bold">Hypothetically</div>
        <div className="hidden md:flex items-center gap-5 lg:gap-15">
          <div className="flex items-center gap-4">
            <MdFamilyRestroom className="text-[32px]" />
            <div className="flex flex-col font-[600]">
              <div className="text-[20px] leading-[28px] text-[#0795fe]">
                Lobbies
              </div>
              <div className="text-[14px] flex items-center gap-1">
                <span className="text-green-600 text-[10px]">●</span>
                <span>100 online</span>
              </div>
            </div>
          </div>
          <div className="font-bold cursor-pointer hover:text-gray-700">Profile</div>
          <div className="font-bold cursor-pointer hover:text-gray-700">Login</div>
        </div>
      </div>
    </div>
  );
}

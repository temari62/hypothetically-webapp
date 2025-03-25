"use client";
import { useState } from "react";

export default function NavItem(props: any) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="cursor-pointer hover:text-blue-900 inline-flex w-full justify-center gap-x-1.5 px-4 xl:px-9 text-[12px] lg:text-[14px] text-[#161b39] font-[600]"
          onClick={() => {
            setIsOpened(!isOpened);
          }}
        >
          {props.title}
          {props.sub != null && (
            <svg
              className="-mr-1 size-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
      {props.sub != null && (
        <div
          className={`${
            !isOpened && "hidden"
          } absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden`}
        >
          {props.sub.map((item: any, index: any) => {
            return (
              <div key={index} className="py-1 hover:bg-gray-100">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  {item.text}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

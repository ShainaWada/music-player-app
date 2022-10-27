// const Sidebar = () => <div>Sidebar</div>;

// export default Sidebar;
import { MdMusicNote, MdMoreHoriz } from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';

import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-56 h-screen bg-[#232323]">
      <div className="flex justify-between items-center text-white">
        <i className="text-2xl">
          <MdMusicNote />
        </i>
        <h2 className="p-2 rounded-sm border text-4xl">Music</h2>
        <i>
          <MdMoreHoriz className="text-3xl" />
        </i>
      </div>
      <div className="w-full h-10 relative mt-5 overflow-hidden rounded-lg text-sm font-bold ">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full border-none outline-none bg-black/50 pl-10 text-white"
        />
        <i className="searchIcon">
          <BiSearchAlt />
        </i>
      </div>
    </div>
  );
}

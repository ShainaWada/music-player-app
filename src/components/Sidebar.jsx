// const Sidebar = () => <div>Sidebar</div>;

// export default Sidebar;
import React from 'react';
import { MdMusicNote, MdMoreHoriz } from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';
import { Menu } from './MusicPlayer/Menu';
import { MenuList } from './MusicPlayer/MenuList';
import { MenuPlayList } from './MusicPlayer/MenuPlayList';

export default function Sidebar() {
  return (
    <div className="w-56 h-screen min-h-full px-3 py-8 overflow-hidden bg-[#000000]">
      <div className="flex justify-between items-center text-white">
        <i className="text-2xl">
          <MdMusicNote />
        </i>
        <h2 className="p-1 rounded-sm border-[#ff009c] border-2 text-3xl">
          music
        </h2>
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
        <i className="absolute top-2.5 left-3 text-white/50 w-11 h-11 text-xl">
          <BiSearchAlt />
        </i>
      </div>
      <Menu title={'Menu'} menuObject={MenuList} />
      <MenuPlayList />
    </div>
  );
}

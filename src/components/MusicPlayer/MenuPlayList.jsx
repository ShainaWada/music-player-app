import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { BsMusicNoteList, BsTrash } from 'react-icons/bs';
import { PlayList } from './PlayList';

function MenuPlayList() {
  return (
    <div className="cursor-pointer my-4 mx-0">
      <div className="flex justify-between items-center text-[#848484] mb-4">
        <p className="text-sm uppercase font-bold">PlayList</p>
        <i className="cursor-pointer text-white">
          <FaPlus />
        </i>
      </div>
      <div className="playListScroll">
        {PlayList &&
          PlayList.map((list) => (
            <div
              className="flex items-center my-2.5 mx-0 text-[#848484] hover:text-[#ff009c]"
              key={list.id}
            >
              <i className="mr-3">
                <BsMusicNoteList />
              </i>

              <p>{list.name}</p>

              <i className="ml-auto">
                <BsTrash />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
}

export { MenuPlayList };

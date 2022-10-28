import { BsFillHouseFill, BsJournalAlbum } from 'react-icons/bs';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { BiPulse } from 'react-icons/bi';

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: 'Home',
  },
  {
    id: 2,
    icon: <BiPulse />,
    name: 'Discover',
  },
  {
    id: 4,
    icon: <FaMicrophoneAlt />,
    name: 'Artist',
  },
  {
    id: 5,
    icon: <BsJournalAlbum />,
    name: 'Albums',
  },
];

export { MenuList };

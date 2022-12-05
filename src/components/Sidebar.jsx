import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { logo } from '../assets';
import { links } from '../assets/constants';

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#242424]">
      {/* <img src={logo} alt="logo" className="w-full h-14 object-contain" /> */}
      <div className="w-full h-14 border ">musicbox</div>
    </div>
  );
};

export default Sidebar;

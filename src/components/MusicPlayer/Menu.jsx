/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';

export function Menu({ title, menuObject }) {
  useEffect(() => {
    const allLi = document
      .querySelector('.MenuContainer ul')
      .querySelectorAll('li');

    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove('active'));
      // eslint-disable-next-line react/no-this-in-sfc
      this.classList.add('active');
    }

    allLi.forEach((n) => n.addEventListener('click', changeMenuActive));
  }, []);

  return (
    <div className="MenuContainer">
      <p className="text-[#848484] uppercase my-4">{title}</p>
      <ul className="w-full p-0 ">
        {menuObject &&
          menuObject.map((menu) => (
            <li
              key={menu.id}
              className="list-none w-full relative py-1 px-0 text-[#848484] hover:text-[#ff009c]"
            >
              {' '}
              <a href="/" className="flex items-center">
                <i className="mr-3">{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default { Menu };

import React from 'react';

function NavButtons({icon, name, path}) {
  return (
      <>
        <li className="flex justify-between text-#FFFFFF hover:text-#00D2CB cursor-pointer items-center pb-[18px]">
                <a href={path} className="flex items-center focus:outline-none">
                    {icon}
                    <span className="text-xs ml-2 pl-[23.17px]">{name}</span></a>
            </li>
      </>
  );
}

export default NavButtons;

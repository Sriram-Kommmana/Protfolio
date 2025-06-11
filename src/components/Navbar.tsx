import React from 'react';
import { HyperText } from "@/components/magicui/hyper-text";

const Navbar: React.FunctionComponent= () => {
  return(
    <nav className='fixed top-0 left-0 w-full px-60 bg-black text-white p-4 z-40 flex justify-between items-baseline'>
        <HyperText className='text-3xl'>&lt;Sriram/&gt;</HyperText>
        <ul className='flex space-x-4 text-white'>
        {['About', 'Projects', 'Tech Stack', 'Contact'].map((item, index) => (
          <li key={index}>
            <a href={`#${item.toLowerCase().replace(" ", "")}`} className='relative text-lg !text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
};
export default Navbar;

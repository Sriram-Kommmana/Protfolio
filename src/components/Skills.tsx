import React from 'react';
import Marquee from "react-fast-marquee";

const Skills: React.FunctionComponent= () => {
  return(
    <div className='h-screen w-full flex'>
      <Marquee
        pauseOnHover
        speed={50}
        gradient={false}
        className="text-black !text-[40px] font-bold bg-white h-[50px] russo-one-regular overflow-hidden"
      >
        KOMMANA SRIRAM &bull;&nbsp;KOMMANA SRIRAM &bull;&nbsp;KOMMANA SRIRAM &bull;&nbsp;KOMMANA SRIRAM &bull;&nbsp;
      </Marquee>
    </div>

  )
};
export default Skills;
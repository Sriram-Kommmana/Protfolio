import React from 'react';
import Marquee from "react-fast-marquee";
import Card from './Card'
const Skills: React.FunctionComponent= () => {
  return(
    <div className='h-screen w-full flex flex-col gap-5'>
      <Marquee
        pauseOnHover
        speed={50}
        gradient={false}
        className="text-black !text-[40px] font-bold bg-white h-[50px] russo-one-regular overflow-hidden"
      >
        KOMMANA SRIRAM &bull;&nbsp;KOMMANA SRIRAM &bull;&nbsp;KOMMANA SRIRAM &bull;&nbsp;KOMMANA SRIRAM &bull;&nbsp;
      </Marquee>
      <h2 className='text-white !text-[40px] russo-one-regular text-center'>WHAT I DO</h2>
      <div className='flex flex-col items-center justify-center gap-5'>
        <p className='text-white roboto-mono-regular !opacity-90 !text-lg text-center'>Turning ideas into clean, fast, and functional web experiences. I try to bring ideas to life with code. <br />I focus on building modern, responsive websites that not only look good but also perform seamlessly.</p>
        <div className='flex gap-3'>
          <Card title="UI & UX" description="Designing interfaces that are intuitive, efficient, and enjoyable to use."/>
          <Card title="UI & UX" description="Designing interfaces that are intuitive, efficient, and enjoyable to use."/>
          <Card title="UI & UX" description="Designing interfaces that are intuitive, efficient, and enjoyable to use."/>
          <Card title="UI & UX" description="Designing interfaces that are intuitive, efficient, and enjoyable to use."/>
        </div>
      </div>
    </div>

  )
};
export default Skills;
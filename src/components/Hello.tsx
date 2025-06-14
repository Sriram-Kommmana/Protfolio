import React, {useState} from 'react';
import one from '/finalFOto1.png';
import two from '/finalFOto2.png';

const Hello: React.FunctionComponent= () => {

  const [hover, setHover] = useState(false);
  return(
    <div className='h-screen'>
      <div className='relative inline-block'>
        <h1 className='text-white russo-one-regular pt-[100px] z-10'>HI, I'M SRIRAM</h1>
        <h1 className='absolute top-0 left-0 text-transparent russo-one-regular pt-[100px] z-50' style={{ WebkitTextStroke: '1px white' }}>HI, I'M SRIRAM</h1>
      </div>
      <div className="flex justify-between w-full -translate-y-20">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center">
          <img
            src={hover ? two : one}
            alt=""
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className='h-[75vh] max-w-[90vw] object-contain'
          />
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  )
};
export default Hello;
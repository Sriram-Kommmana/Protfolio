import React, {useState} from 'react';
import one from '/finalFOto1.png';
import two from '/finalFOto2.png';

const Hello: React.FunctionComponent= () => {

  const [hover, setHover] = useState(false);
  return(
    <div className='flex flex-col items-center justify-center'>
      <div className='absolute inline-block flex items-center justify-center'>
        <h1 className='text-white russo-one-regular z-10'>HI, I'M SRIRAM</h1>
        <h1 className='absolute top-0 left-0 text-transparent russo-one-regular z-40' style={{ WebkitTextStroke: '2px white' }}>HI, I'M SRIRAM</h1>
      </div>
      <div className="relative flex justify-around w-full">
        <div className="flex-1 text-white"><h1>HII</h1></div>
        <div className="flex-1">
          <img
            src={hover ? two : one}
            alt=""
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className='h-[calc(100vh-4rem)] max-w-[90vw] object-contain flex-1'
          />
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  )
};
export default Hello;
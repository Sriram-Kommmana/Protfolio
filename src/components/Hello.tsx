import React, {useState} from 'react';
import one from '/finalFOto1.png';
import two from '/finalFOto2.png';
import Button from './ui/Button';

const Hello: React.FunctionComponent= () => {
  
  const handleConnectClick = () => {
    window.location.href = 'mailto:your.email@example.com';
  };

  const [hover, setHover] = useState(false);
  return(
    <div className='flex flex-col items-center justify-center'>
      <div className='absolute inline-block flex items-center justify-center'>
        <h1 className='text-white russo-one-regular z-10 select-none'>HI, I'M SRIRAM</h1>
        <h1 className='absolute top-0 left-0 text-transparent russo-one-regular z-40 select-none' style={{ WebkitTextStroke: '2px white' }}>HI, I'M SRIRAM</h1>
      </div>
      <div className="relative flex justify-around w-full">
        <div className="flex-1 text-white">
            <div className="h-[33%]"></div>
            <div className="h-[33%]"></div>
            <div className="h-[33%] flex justify-end"><h2 className='roboto-mono-regular !text-2xl text-end opacity-80 drop-shadow-sm top-2'>Building seamless stories<br/>in code.</h2></div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={hover ? two : one}
            alt=""
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className='h-[calc(100vh-4rem)] max-w-[90vw] object-contain flex-1'
          />
        </div>
        <div className="flex-1 text-white">
            <div className="h-[33%] relative">
              <h2 className='absolute bottom-0 left-0 roboto-mono-regular !text-5xl flex flex-col gap-2 !opacity-88'>
                <span className=''>FULL-STACK</span>
                <span className='!text-6xl'>DEVELOPER</span>
                <span className=''>& DESIGNER</span>
              </h2>
            </div>
            <div className="h-[33%]"></div>
            <div className="h-[33%] relative">
              <Button onClick={handleConnectClick}
                variant="bracket"
                size="lg"
                className="absolute bottom-10 left-0">
                Let's Connect
              </Button>
            </div>
        </div>
      </div>
    </div>
  )
};
export default Hello;
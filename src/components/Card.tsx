
import React from 'react';

type ServiceCardProps = {
  title: string;
  description: string;
};

const Card: React.FC<ServiceCardProps>= ({title, description}) => {
  return(
    <div className="bg-[#121212] border border-[#2a2a2a] rounded-md p-6 text-white w-72 h-72 hover:shadow-lg transition-shadow !p-3 flex flex-col justify-end">
        <h4 className="text-cyan-400 text-lg font-semibold mb-2">{title}</h4>
        <p className="text-[#f1f1dc] text-sm leading-relaxed">{description}</p>
    </div>
  )
};
export default Card;
import React from 'react';
import { HyperText } from "@/components/magicui/hyper-text";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  return (
      <div className="w-screen !px-60 bg-[rgba(0,0,0,0.75)] backdrop-blur-md !sm:px-6 flex items-center justify-between h-16 !mx-auto">
        <HyperText className="text-white text-4xl font-bold flex-shrink-0 whitespace-nowrap">&lt;SRIRAM/&gt;</HyperText>
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className='relative text-lg !text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

  );
};

export default Navbar;

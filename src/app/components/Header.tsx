'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Ensure you have react-icons installed

interface HeaderProps {
  logoPath: string;
}

const Header: React.FC<HeaderProps> = ({ logoPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white p-4 flex items-center justify-between md:justify-between relative">
      {/* Logo */}
      <div className="flex justify-between w-full md:w-auto items-center">
        <Link href="/">
          <Image
            src="/Images/Group25.png"
            alt="APSV Logo"
            width={100}
            height={50}
            className="rounded-md"
          />
        </Link>
        {/* Sidebar Toggle Button */}
        <button
          className="md:hidden text-xl"
          onClick={toggleSidebar}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white border-r border-gray-200 shadow-md transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden z-50`}
      >
        <div className="p-4">
          <button
            className="text-xl float-right"
            onClick={toggleSidebar}
          >
            <HiX />
          </button>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/teams">Teams</Link>
              </li>
              <li>
                <Link href="/success-stories">Success Stories</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/get-involved">Get Involved</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/donate" className="bg-[#264FAD] text-white px-4 py-2 rounded-md block text-center">
                  Donate
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:w-auto">
        <ul className="flex space-x-14">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/teams">Teams</Link>
          </li>
          <li>
            <Link href="/success-stories">Success Stories</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/get-involved">Get Involved</Link>
          </li>
        </ul>
      </nav>

      {/* Desktop Actions */}
      <div className="hidden md:flex md:space-x-10">
        <ul className="flex items-center gap-10">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/donate" className="bg-[#264FAD] text-white px-4 py-2 rounded-md">
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

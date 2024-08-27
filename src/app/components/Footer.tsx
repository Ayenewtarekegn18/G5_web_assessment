'use client';

import React from 'react';
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center">
              <Image
                src="/Images/rafiki.png"
                alt="Support Us"
                width = {150}
                height = {150} 
                className="mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Get involved in improving tech education in Africa!
                </h2>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
                  Support Us
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-wrap justify-between">
            <div className="w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Success Stories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Get Involved</a></li>
              </ul>
            </div>

            <div className="w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Teams</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Board Members</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Advisors/Mentors</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Executives</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Staffs</a></li>
              </ul>
            </div>

            <div className="w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Blogs</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Recent Blogs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">New Blog</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-wrap justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2020 Africa to Silicon Valley, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
;
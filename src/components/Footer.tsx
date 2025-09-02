import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/utils/consts'; // Your navigation links
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    // Set the dark background color for the entire footer
    <footer className="bg-usecasees-bg text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Column 1: Logo and Tagline */}
          <div className="space-y-4">
            <Image
              src="/logosvg.svg" // Replace with your white logo path
              alt="EduSuite Logo"
              width={160}
              height={50}
              className="object-contain"
            />
            <p className='text-sm leading-relaxed'>
              Trusted By Academic Institutions For Reliability, Security, And Measurable Outcomes.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 flex xl:justify-center xl:items-center">
            <div className="">

              <h3 className='text-lg font-semibold text-white mb-2'>Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-sm hover:text-white transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4 flex xl:justify-center xl:items-start">
            <div className="">

              <h3 className='text-lg font-semibold text-white mb-5'>Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={16} />
                  <a href="tel:+91-9952977470" className="hover:text-white transition-colors">
                    91-9952977470
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} />
                  <a href="mailto:sales@tectratechnologies.com" className="hover:text-white transition-colors">
                    sales@tectratechnologies.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright and Legal Links */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm">
          {/* Copyright Notice */}
          <p className="text-gray-400 order-2 sm:order-1 mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} <a href='https://www.tectratechnologies.com' target='_blank'>Tectratechnologies</a>. All Rights Reserved.
          </p>

          {/* Legal Links */}
          <div className="flex space-x-6 order-1 sm:order-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms Of Service</Link>
            <Link href="/data-security" className="hover:text-white transition-colors">Data Security</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

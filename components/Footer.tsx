import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@constants";

const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
        <div id="contact">
          <h1 className="font-bold ">Contact Us</h1><br/>
          <p className="text-base text-gray-500">+1 778 316 0071</p>
          <p className="text-base text-gray-500 px-0 py-2">bookings@carhub.ca</p>
          <p className="text-base text-gray-500">Address : 3911 Lincoln Drive,
            Vancouver, BC, Canada.</p>
        </div>
      </div>

      {/*<div id="contact">*/}
      {/*  <h1 className="font-bold ">Contact Us</h1>*/}
      {/*  <p className="text-base text-gray-700">+1 778 316 0071</p>*/}
      {/*  <p className="text-base text-gray-700">bookings@carhub.ca</p>*/}
      {/*  <p className="text-base text-gray-700">Address : 3911 Lincoln Drive,*/}
      {/*    Vancouver, BC, Canada.</p>*/}
      {/*</div>*/}

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2024 CarHub. All rights reserved</p>


      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;

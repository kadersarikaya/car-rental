import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white pt-20 px-14 pb-7 flex flex-col gap-6">
      <div className="flex md:flex-row flex-col  gap-2 justify-between">
        <div className="">
          <h1 className="text-indigo-600 font-bold text-3xl">MORENT</h1>
          <p className="pt-4 text-gray-400 text-base font-medium max-w-sm">Our vision is to provide convenience and help increase your sales business.</p>
        </div>
        <div className="flex gap-4 md:gap-10">
          <div className="">
            <h2 className="text-xl font-semibold pb-2">About</h2>
            <ul className="text-gray-400 text-base font-medium">
              <li>
                <a href="">How it works</a>
              </li>
              <li>
                <a href="">Featured</a>
              </li>
              <li>
                <a href="">Partnership</a>
              </li>
              <li>
                <a href="">Bussiness Relation</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-xl font-semibold pb-2">Community</h2>
            <ul className="text-gray-400 text-base font-medium">
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Podcast</a>
              </li>
              <li>
                <a href="">Invite a friend</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-xl font-semibold pb-2">Socials</h2>
            <ul className="text-gray-400 text-base font-medium">
              <li>
                <a href="">Discord</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>  
      <hr />
      <div className="flex flex-col md:flex-row justify-between gap-2 text-gray-700 font-base font-semibold">
        <div className="">©2022 MORENT. All rights reserved</div>
        <div className="flex gap-4">
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;

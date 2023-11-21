import React from "react";

const Footer = () => {
  return (
    <footer className="mx-4 secondary_bg mb-24">
      <div className="gap-4 grid grid-cols-12">
        <div className="col-span-2 p-2">
          <h3 className="text-xl font-semibold mb-2">Company</h3>
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
          </ul>
        </div>
        <div className="col-span-2 p-2"></div>
        <div className="col-span-2 p-2"></div>
        <div className="col-span-5 p-2"></div>
      </div>

      <div className="my-8 border-b border-white/50"></div>
      <p>
        <span className="text-gray-400">© 2023 Spotify AB</span>
      </p>
    </footer>
  );
};

export default Footer;

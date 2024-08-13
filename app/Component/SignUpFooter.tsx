// components/Footer.tsx

import React from "react";

const links = {
  Support: [
    "Support",
    "Help Centre",
    "AirCover",
    "Anti-discrimination",
    "Disability support",
    "Cancellation options",
    "Report neighbourhood concern",
  ],
  Hosting: [
    "Hosting",
    "Airbnb your home",
    "AirCover for Hosts",
    "Hosting resources",
    "Community forum",
    "Hosting responsibly",
    "Join a free Hosting class",
  ],
  Airbnb: [
    "Airbnb",
    "Newsroom",
    "New features",
    "Careers",
    "Investors",
    "Airbnb.org emergency stays",
  ],
};

const SignUpFooter: React.FC = () => {
  return (
    <footer className="bg-[#F7F7F7] mt-20 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-gray-600">{category}</h3>
              <ul className="space-y-2">
                {items.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-700 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Airbnb, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SignUpFooter;

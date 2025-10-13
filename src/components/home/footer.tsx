"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 w-full">
      {/* Main container */}
      <div className="w-full flex justify-between items-center px-10">
        
        {/* LEFT SIDE - FOOTER LINKS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-4 text-left">
          {/* Column 1 - CS Expo */}
          <div>
            <h3 className="font-semibold text-2xl mb-3">CS Expo</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">About</Link></li>
              <li><Link href="#" className="hover:underline">Schedule</Link></li>
              <li><Link href="#" className="hover:underline">Panelists</Link></li>
              <li><Link href="#" className="hover:underline">Speakers</Link></li>
            </ul>
          </div>

          {/* Column 2 - Dev Day */}
          <div>
            <h3 className="font-semibold text-2xl mb-3">Dev Day</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">About</Link></li>
              <li><Link href="#" className="hover:underline">Schedule</Link></li>
              <li><Link href="#" className="hover:underline">Speakers</Link></li>
            </ul>
          </div>

          {/* Column 3 - Projects */}
          <div>
            <h3 className="font-semibold text-2xl mb-3">Projects</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Collection</Link></li>
              <li><Link href="#" className="hover:underline">Hall of Fame</Link></li>
            </ul>
          </div>

          {/* Column 4 - Partners */}
          <div>
            <h3 className="font-semibold text-2xl mb-3">Our Partners</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Media Partners</Link></li>
              <li><Link href="#" className="hover:underline">Major Partners</Link></li>
              <li><Link href="#" className="hover:underline">Minor Partners</Link></li>
            </ul>
          </div>

          {/* Column 5 - About */}
          <div className="ml-7">
            <h3 className="font-semibold text-2xl mb-3">About</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">CS Expo 2024</Link></li>
              <li><Link href="#" className="hover:underline">CS Teams</Link></li>
              <li><Link href="#" className="hover:underline">Committees</Link></li>
              <li><Link href="#" className="hover:underline">Faculty</Link></li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE - LOGO */}
        <div className="flex-shrink-0">
          <Image
            src="/logo/expo_logo.png"
            alt="CS Expo Logo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-300 mt-12 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} CS EXPO. All rights reserved.
      </div>
    </footer>
  );
}

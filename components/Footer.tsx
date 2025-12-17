// components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      {/* 主要内容区域 */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* 品牌信息 */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <span className="text-2xl font-bold text-white">W</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  Whisper of the <span className="text-blue-400">House</span>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Your ultimate guide to exploring the mysteries and secrets of Whisper of the House. 
                Discover comprehensive resources, guides, and collections.
              </p>
            </div>

            {/* 快速链接 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/guides" className="text-gray-300 hover:text-white transition-colors duration-300">Guides</Link></li>
                <li><Link href="/collection" className="text-gray-300 hover:text-white transition-colors duration-300">Collection</Link></li>
                <li><Link href="/play-online" className="text-gray-300 hover:text-white transition-colors duration-300">Play Online</Link></li>
                <li><Link href="/abnormal-points-collection" className="text-gray-300 hover:text-white transition-colors duration-300">Abnormal Points</Link></li>
                <li><Link href="/download-and-news" className="text-gray-300 hover:text-white transition-colors duration-300">Downloads & News</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Us</Link></li>
                <li><Link href="/winter-burrow" className="text-gray-300 hover:text-white transition-colors duration-300">Winter Burrow Guide</Link></li>
                <li><Link href="/i-am-alone" className="text-gray-300 hover:text-white transition-colors duration-300">YES, I'M ALONE. Guide</Link></li>

              </ul>
            </div>

            {/* 资源链接 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="/play-online" className="text-gray-300 hover:text-white transition-colors duration-300">Home Design Small House</Link></li>
                <li><Link href="/papas-wingeria" className="text-gray-300 hover:text-white transition-colors duration-300">Papa's Wingeria</Link></li>
                <li><Link href="/steal-brainrot" className="text-gray-300 hover:text-white transition-colors duration-300">Steal a Brainrot</Link></li>
                <li><Link href="/vikings-an-archers-journey" className="text-gray-300 hover:text-white transition-colors duration-300">Vikings: An Archer's Journey</Link></li>
                <li><Link href="/tree-house-maker" className="text-gray-300 hover:text-white transition-colors duration-300">Tree House Maker</Link></li>
                <li><Link href="/horseshoeing" className="text-gray-300 hover:text-white transition-colors duration-300">Horse Shoeing</Link></li>
                <li><Link href="/panda-resort" className="text-gray-300 hover:text-white transition-colors duration-300">Panda Resort</Link></li>
                <li><Link href="/puppet-master" className="text-gray-300 hover:text-white transition-colors duration-300">Puppet Master</Link></li>
                <li><Link href="/blumgi-slime" className="text-gray-300 hover:text-white transition-colors duration-300">Blumgi Slime</Link></li>
                <li><Link href="/grow-a-garden" className="text-gray-300 hover:text-white transition-colors duration-300">Grow A Garden</Link></li>
              </ul>
            </div>
          </div>

          {/* 联系信息 */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <h4 className="font-semibold text-blue-300 mb-2">Contact Us</h4>
                <a href="mailto:support@causalzap.com" className="text-gray-300 hover:text-white transition-colors">
                  support@causalzap.com
                </a>
              </div>
              
              {/* 社交媒体图标（可选） */}
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-lg">📱</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-lg">🐦</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-lg">💬</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 版权信息 */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-center md:text-left">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Whisper of the House. All Rights Reserved.
            </div>
            <div className="text-gray-500 text-xs">
              This is an unofficial fan site. Whisper of the House is a registered trademark of its respective owners.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
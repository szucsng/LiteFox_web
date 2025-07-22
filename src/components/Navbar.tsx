'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@nextui-org/react'

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Kezdőlap', href: '/' },
    { name: 'Rólunk', href: '/about' },
    { name: 'Szabályok', href: '/rules' },
    { name: 'Adminok', href: '/admins' },
    { name: 'Támogatás', href: '/support' },
    { name: 'Kapcsolat', href: '/contact' },
  ]

  return (
    <nav className="navbar-gradient w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 logo-container-navbar rounded-full flex items-center justify-center overflow-hidden">
            <Image src="/favicon.ico" alt="LF Logo" width={36} height={36} />
          </div>
          <span className="font-bold text-2xl text-black">LiteFox RP</span>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[17px] font-medium text-black hover:text-secondary-300 transition-colors px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex gap-2 items-center">
          <Button
            as={Link}
            href="/support"
            className="btn-primary-gradient px-5 py-2 text-base"
          >
            💎 Támogatás
          </Button>
          <Button
            as={Link}
            href="/join"
            className="bg-primary-200 text-black font-semibold px-5 py-2 rounded hover:bg-primary-300 border border-primary-300 transition"
          >
            Csatlakozás
          </Button>
        </div>
        {/* Mobilmenü gomb */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menü"
        >
          <span className="sr-only">Menü</span>
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary-300">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobilmenü */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-primary-300 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-2 px-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[17px] font-medium text-black hover:text-secondary-300 transition-colors px-2 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              as={Link}
              href="/support"
              className="btn-primary-gradient w-full mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              💎 Támogatás
            </Button>
            <Button
              as={Link}
              href="/join"
              className="bg-primary-200 text-black font-semibold w-full mt-1 hover:bg-primary-300 border border-primary-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Csatlakozás
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
} 
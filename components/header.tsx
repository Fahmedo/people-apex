'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-white shadow-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative lg:md:w-48 w-32">
            <img src="/pas-logo.png" alt="" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/services"
            className="text-sm font-medium hover:text-white/80 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-white/80 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/team"
            className="text-sm font-medium hover:text-white/80 transition-colors"
          >
            Our Team
          </Link>
          <Button
            asChild
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary pb-4">
          <nav className="flex flex-col space-y-4 px-6">
            <Link
              href="/services"
              className="text-sm font-medium py-2 hover:text-white/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium py-2 hover:text-white/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium py-2 hover:text-white/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            <Button
              asChild
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

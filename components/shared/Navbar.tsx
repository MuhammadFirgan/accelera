'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems } from '@/constans';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Image 
                src="/images/logo3.png"
                width={24}
                height={24}
                alt='logo'
              />
              <span className="text-xl font-bold">
                Accelera
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 backdrop-blur-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <Image 
                src="/images/logo3.png"
                width={24}
                height={24}
                alt='logo'
              />
            </div>
            <span className="text-xl font-bold">
              Accelera
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-4 p-2"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 bg-transparent"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-black dark:text-white" /> : <Moon className="h-5 w-5 text-black dark:text-white" />}
            </Button>
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-transparent"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5 text-black dark:text-white" /> : <Menu className="h-5 w-5 text-black dark:text-white" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden 
              bg-white/90 dark:bg-gray-900/90 
           
              border border-gray-200 dark:border-gray-700/50 
              shadow-lg 
              rounded-lg 
              mx-4 mt-2 
              overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 
                    text-gray-700 hover:text-gray-900 
                    dark:text-gray-300 dark:hover:text-white 
                    transition-colors duration-200 
                    font-medium
                    rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
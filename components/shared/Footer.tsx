"use client"

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { footerLinks } from '@/constans';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '../ui/input';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  

  return (
    <footer className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 text-white">
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Image 
                    src="/images/logo3.png"
                    width={32}
                    height={32}
                    alt="logo"
                />
                <span className="text-2xl font-bold text-primary dark:text-white">
                  Accelera
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Pioneering the future of business through innovative AI solutions and strategic technology consulting.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-3" />
                  <span className="text-sm">hello@accelera.com</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-3" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span className="text-sm">Jakarta, Indonesia</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white hover:bg-blue-600/20">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white hover:bg-blue-600/20">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white hover:bg-blue-600/20">
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-muted-foreground mb-4">Services</h3>
                <ul className="space-y-2">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="text-muted-foreground hover:text-muted-foreground transition-colors text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-muted-foreground mb-4">Company</h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="text-muted-foreground hover:text-muted-foreground transition-colors text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-muted-foreground mb-4">Resources</h3>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="text-muted-foreground hover:text-white transition-colors text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-muted-foreground mb-4">Legal</h3>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="text-muted-foreground hover:text-white transition-colors text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        <Separator className="bg-gray-700" />
        
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 Accelera. All rights reserved. 
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-white hover:bg-blue-600/20"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
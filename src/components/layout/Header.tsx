"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">A</span>
            </div>
            <div>
              <span className="font-bold text-lg md:text-xl text-brand-700">
                Asil
              </span>
              <span className="font-semibold text-lg md:text-xl text-neutral-700">
                {" "}Hospital
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  pathname === link.href
                    ? "text-brand-600 bg-brand-50"
                    : "text-neutral-600 hover:text-brand-600 hover:bg-brand-50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{siteConfig.phoneDisplay}</span>
                <span className="xl:hidden">Call Us</span>
              </a>
            </Button>
            <Button asChild>
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile: Phone + Menu */}
          <div className="flex lg:hidden items-center space-x-2">
            <Button variant="outline" size="icon" asChild>
              <a href={`tel:${siteConfig.phone}`} aria-label="Call us">
                <Phone className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-neutral-200"
          >
            <nav className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200",
                    pathname === link.href
                      ? "text-brand-600 bg-brand-50"
                      : "text-neutral-600 hover:text-brand-600 hover:bg-brand-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button className="w-full" asChild>
                  <Link href="/contact">Book Appointment</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
